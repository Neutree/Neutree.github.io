---
layout: default
title: 密码门锁（51）
description: 一个课程设计：51单片机实现电子密码锁
categories: projects
---

* 硬件平台：硕飞科技ME850单片机开发试验仪
* MCU：AT89S52
* 简要说明：</br>
  基本功能实现，延时开门，显示、管理员设置时间，设置密码，管理员查看开门记录等。有一定的交互性，最初的代码，有待优化，代码冗杂度比较高，待优化。
* 功能：</br>
  * 1、	数字时钟：显示形如“2015-06-19 10:20:36”或数码管“06.19.10.20”；
  * 2、	系统记录每单元8户密码，密码数据格式定义为“unsigned long”,密码可由用户自由设定并存入E2PROM，一号用户初始密码“11111111”、二号号用户初始密码“22222222”、……、八号用户初始密码“88888888”；
  * 3、	当有“0-9”数字按键，显示输入密码“\*\*\*\_\_\_\_\_”,\*表示已输入位，\_表示待输入位，从第一位密码开始15秒内连续输入正确密码则继电器“RELAY”动作开门，开门动作10秒后继电器“RELAY”复归原始状态；
  * 4、	正常开门、操作超时或密码错误则报警；正确或错误操作按顺序记录操作时间、操作者序号和操作密码等信息用循环追加的方式记录到E2PROM
  * 5、	设计相应的记录查询功能，查询记录需要单独的超级密码。

* 使用说明:</br>
	操作：使用4x4矩阵键盘,C键通常为上一页，E键通常为下一页，D一般作为OK键，F为回到桌面或Backspace。
	初始密码：用户9为管理员，密码为99999999；用户1到8为普通用户，密码为八个1~八个8

* 图片：</br>
![](/assets/images/projects/secret_lock/markdown-img-paste-20170410235618179.png)</br>
主界面，显示时间和提示
![](/assets/images/projects/secret_lock/markdown-img-paste-20170410235730149.png)</br>
用户选择
![](/assets/images/projects/secret_lock/markdown-img-paste-20170410235745529.png)</br>
密码输入
![](/assets/images/projects/secret_lock/markdown-img-paste-20170410235809454.png)</br>
密码错误
![](/assets/images/projects/secret_lock/markdown-img-paste-20170410235822248.png)</br>
超时开门
![](/assets/images/projects/secret_lock/markdown-img-paste-20170410235835185.png)</br>
功能菜单，可以翻页
![](/assets/images/projects/secret_lock/markdown-img-paste-20170410235856223.png)</br>
查看记录，时间、用户、输入的密码、结果，可以翻页、退出
![](/assets/images/projects/secret_lock/markdown-img-paste-2017041023591424.png)</br>
设置时间
![](/assets/images/projects/secret_lock/markdown-img-paste-2017041023593672.png)</br>
设置密码
