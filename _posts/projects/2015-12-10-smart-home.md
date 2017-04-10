---
layout: default
title: 智能家居远程监控系统
description: 个人项目，实现通过手机应用远程对多个硬件设备进行控制和状态、数据查看。系统包括了硬件设备、服务器、移动App，硬件使用STM32作为主控，通过esp8266模块的WIFI（使用TCP协议）与服务器通信，手机App也是使用TCP协议通过使用socket与服务器进行通信。
categories: projects
---

简单的智能家居demo
![](/assets/images/projects/smart_home/SmartHome.png)


# Feature
 * 由硬件+服务器+移动端客户端组成
 * 灯光：手机查看、控制灯光开关、定时开关
 * 窗帘：手机查看窗帘状态、控制窗帘开关
 * 门禁：手机查看、管理门开关，刷RFID卡开门
 * 安防：离家模式--模拟主人在家的情况

# 硬件
* 核心：STM32F103C8T6
* 调试器：ST-LINK V2
* 窗帘相关：步进电机、模拟信号输出光传感器
* 灯光：LED
* 通信：esp8266 ( WIFI )


# 开发环境
* 底层
  * IDE:MDK 5.17.0.0
  * 语言： C++ 、C
* 服务器
  * IDE：Myeclipse/eclipse
  * 语言：java
* 移动客户端
  * IDE：Android Studio
  * 语言：java
