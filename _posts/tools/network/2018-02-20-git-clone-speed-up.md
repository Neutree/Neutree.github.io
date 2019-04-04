---
layout: default
title: git clone 加速  （github clone 加速） 代理
description: 为 git clone 设置代理， 在 clone 国外的仓库是速度更快
categories: tools/network
---

![git clone 加速](http://upload-images.jianshu.io/upload_images/3500903-5680caa2395c1455.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



使用git clone国外的源很慢，典型的就是github，搭建了ss（2019年初大面积死亡）或者其它, 系统设置了自动代理或者手动代理， 对命令行是不生效的，命令行需要做到git使用代理，使用一下两种方法，建议第二种：

##  (一) 在git中设置socks5代理

主要是设置两个参数：http.proxy和https.proxy
通过如下方式可以设置http和https代理

```
git config --global http.proxyhttp://127.0.0.1:1080
git config --global https.proxyhttps://127.0.0.1:1080
```
但是ss使用的是socks5，所以要用如下方式设置
```
git config --global --unset http.proxy
git config --global --unset https.proxy
git config --global http.proxy 'socks5://127.0.0.1:1080'
git config --global https.proxy 'socks5://127.0.0.1:1080'
```
> git 全局设置用`git config --global --list`查看

不使用代理：

![不使用代理的git clone速度](http://upload-images.jianshu.io/upload_images/3500903-f0b8140a1b60e0c4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

使用代理：


![使用了代理的git clone速度](http://upload-images.jianshu.io/upload_images/3500903-197018adb6591e66.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# （二） 使用proxychains在需要时使用(适用终端下任何命令)

上面这种方式对git全局生效，国内的也会使用代理，而且只对git有用，其它命令不行，所以可以用工具[proxychains](https://github.com/rofl0r/proxychains-ng)来使用代理，安装好软件后，在需要使用代理的命令前加上proxychains4就行了，比如`proxuchains4 git clone.......`

```
git clone https://github.com/rofl0r/proxychains-ng.git
cd proxychains-ng 
make
sudo make install
sudo make install-config
vim /usr/local/etc/proxychains.conf （文件地址由上一个命令给出，修改socks4为socks5,端口改为ss的本地端口（如1080））
```

然后就可以正常使用了，在要执行的命令前加`proxychains4`（根据make时生成的.o文件名决定，`-o proxychains4`）即可比如

```
proxychains4 curl 'http://www.baidu.com/s?ie=UTF-8&wd=ip' |grep "IP:"
```

效果应该和在命令参数中加代理效果是一样的(如下一条)

```
 curl --socks5 127.0.0.1:1080 'http://www.baidu.com/s?ie=UTF-8&wd=ip' |grep "IP:"
```

> 小技巧：编辑~/.bashrc（bash）或者~/.zshrc（zsh）,在末尾添加alias proxy="proxychains4"，取个别名（注意最好先检查一下系统中是否已经有了这个别名），可以少输入一点点


安装记录：
```
➜  ~ mkdir temp
➜  ~ cd temp
➜  temp git clone https://github.com/rofl0r/proxychains-ng.git
Cloning into 'proxychains-ng'...
remote: Counting objects: 1105, done.
remote: Total 1105 (delta 0), reused 0 (delta 0), pack-reused 1105
Receiving objects: 100% (1105/1105), 575.20 KiB | 28.00 KiB/s, done.
Resolving deltas: 100% (718/718), done.
Checking connectivity... done.
➜  temp ls
proxychains-ng
➜  temp cd proxychains-ng 
➜  proxychains-ng git:(master) make
cc  -Wall -O0 -g -std=c99 -D_GNU_SOURCE -pipe   -DLIB_DIR=\"/usr/local//lib\" -DSYSCONFDIR=\"/usr/local//etc\" -DDLL_NAME=\"libproxychains4.so\"  -fPIC -c -o src/nameinfo.o src/nameinfo.c
printf '#define VERSION "%s"\n' "$(sh tools/version.sh)" > src/version.h
cc  -Wall -O0 -g -std=c99 -D_GNU_SOURCE -pipe   -DLIB_DIR=\"/usr/local//lib\" -DSYSCONFDIR=\"/usr/local//etc\" -DDLL_NAME=\"libproxychains4.so\"  -fPIC -c -o src/version.o src/version.c
cc  -Wall -O0 -g -std=c99 -D_GNU_SOURCE -pipe   -DLIB_DIR=\"/usr/local//lib\" -DSYSCONFDIR=\"/usr/local//etc\" -DDLL_NAME=\"libproxychains4.so\"  -fPIC -c -o src/core.o src/core.c
cc  -Wall -O0 -g -std=c99 -D_GNU_SOURCE -pipe   -DLIB_DIR=\"/usr/local//lib\" -DSYSCONFDIR=\"/usr/local//etc\" -DDLL_NAME=\"libproxychains4.so\"  -fPIC -c -o src/common.o src/common.c
cc  -Wall -O0 -g -std=c99 -D_GNU_SOURCE -pipe   -DLIB_DIR=\"/usr/local//lib\" -DSYSCONFDIR=\"/usr/local//etc\" -DDLL_NAME=\"libproxychains4.so\"  -fPIC -c -o src/libproxychains.o src/libproxychains.c
cc  -Wall -O0 -g -std=c99 -D_GNU_SOURCE -pipe   -DLIB_DIR=\"/usr/local//lib\" -DSYSCONFDIR=\"/usr/local//etc\" -DDLL_NAME=\"libproxychains4.so\"  -fPIC -c -o src/allocator_thread.o src/allocator_thread.c
cc  -Wall -O0 -g -std=c99 -D_GNU_SOURCE -pipe   -DLIB_DIR=\"/usr/local//lib\" -DSYSCONFDIR=\"/usr/local//etc\" -DDLL_NAME=\"libproxychains4.so\"  -fPIC -c -o src/ip_type.o src/ip_type.c
cc  -Wall -O0 -g -std=c99 -D_GNU_SOURCE -pipe   -DLIB_DIR=\"/usr/local//lib\" -DSYSCONFDIR=\"/usr/local//etc\" -DDLL_NAME=\"libproxychains4.so\"  -fPIC -c -o src/hostsreader.o src/hostsreader.c
cc  -Wall -O0 -g -std=c99 -D_GNU_SOURCE -pipe   -DLIB_DIR=\"/usr/local//lib\" -DSYSCONFDIR=\"/usr/local//etc\" -DDLL_NAME=\"libproxychains4.so\"  -fPIC -c -o src/hash.o src/hash.c
cc  -Wall -O0 -g -std=c99 -D_GNU_SOURCE -pipe   -DLIB_DIR=\"/usr/local//lib\" -DSYSCONFDIR=\"/usr/local//etc\" -DDLL_NAME=\"libproxychains4.so\"  -fPIC -c -o src/debug.o src/debug.c
cc -fPIC -Wl,--no-as-needed -ldl -lpthread -Wl,-soname=libproxychains4.so  \
	-shared -o libproxychains4.so src/nameinfo.o src/version.o src/core.o src/common.o src/libproxychains.o src/allocator_thread.o src/ip_type.o src/hostsreader.o src/hash.o src/debug.o
cc  -Wall -O0 -g -std=c99 -D_GNU_SOURCE -pipe   -DLIB_DIR=\"/usr/local//lib\" -DSYSCONFDIR=\"/usr/local//etc\" -DDLL_NAME=\"libproxychains4.so\"  -fPIC -c -o src/main.o src/main.c
cc src/main.o src/common.o  -o proxychains4
➜  proxychains-ng git:(master) sudo make install
printf '#define VERSION "%s"\n' "$(sh tools/version.sh)" > src/version.h
cc  -Wall -O0 -g -std=c99 -D_GNU_SOURCE -pipe   -DLIB_DIR=\"/usr/local//lib\" -DSYSCONFDIR=\"/usr/local//etc\" -DDLL_NAME=\"libproxychains4.so\"  -fPIC -c -o src/version.o src/version.c
cc -fPIC -Wl,--no-as-needed -ldl -lpthread -Wl,-soname=libproxychains4.so  \
	-shared -o libproxychains4.so src/nameinfo.o src/version.o src/core.o src/common.o src/libproxychains.o src/allocator_thread.o src/ip_type.o src/hostsreader.o src/hash.o src/debug.o
./tools/install.sh -D -m 644 libproxychains4.so /usr/local//lib/libproxychains4.so
cc src/main.o src/common.o  -o proxychains4
./tools/install.sh -D -m 755 proxychains4 /usr/local/bin/proxychains4
➜  proxychains-ng git:(master) sudo make install-config
./tools/install.sh -D -m 644 src/proxychains.conf /usr/local//etc/proxychains.conf
➜  proxychains-ng git:(master) vim /etc/proxychains.conf 
➜  proxychains-ng git:(master) curl --socks5 127.0.0.1:1080 'http://www.baidu.com/s?ie=UTF-8&wd=ip' |grep "IP:"
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 81841    0 81841    0     0  42746      0 --:--:--  0:00:01 --:--:-- 42759    		
<span class="c-gap-right">本机IP:107.191.60.141</span>日本	    
100  211k    0  211k    0     0  63416      0 --:--:--  0:00:03 --:--:-- 63442
➜  proxychains-ng git:(master) curl 'http://www.baidu.com/s?ie=UTF-8&wd=ip' |grep "IP:"
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0    		
<span class="c-gap-right">本机IP:116.24.22.220</span>广东省深圳市 电信	    
100  214k    0  214k    0     0   686k      0 --:--:-- --:--:-- --:--:--  686k
➜  proxychains-ng git:(master) proxychains4 curl 'http://www.baidu.com/s?ie=UTF-8&wd=ip' |grep "IP:"
[proxychains] config file found: /usr/local/etc/proxychains.conf
[proxychains] preloading /usr/local/lib/libproxychains4.so
[proxychains] DLL init: proxychains-ng 4.12
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[proxychains] Strict chain  ...  127.0.0.1:9050  ...  timeout
curl: (7) Couldn't connect to server
➜  proxychains-ng git:(master) vim /usr/local/etc/proxychains.conf 
➜  proxychains-ng git:(master) sudo vim /usr/local/etc/proxychains.conf
➜  proxychains-ng git:(master) proxychains4 curl 'http://www.baidu.com/s?ie=UTF-8&wd=ip' |grep "IP:"
[proxychains] config file found: /usr/local/etc/proxychains.conf
[proxychains] preloading /usr/local/lib/libproxychains4.so
[proxychains] DLL init: proxychains-ng 4.12
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[proxychains] Strict chain  ...  127.0.0.1:1080  ...  www.baidu.com:80  ...  OK
100  116k    0  116k    0     0  48166      0 --:--:--  0:00:02 --:--:-- 48169    		
<span class="c-gap-right">本机IP:107.191.60.141</span>日本	    
100  212k    0  212k    0     0  55769      0 --:--:--  0:00:03 --:--:-- 55763
```
