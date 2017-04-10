---
layout: default
title: 四轴飞行控制器
description: 四轴飞控，项目包含了PC端地面站软件、电路板、解算算法和控制算法等
categories: projects
---

实验室项目，四轴飞控，项目包含了PC端地面站软件、电路板、解算算法和控制算法等。使用3轴加速度计、3轴陀螺仪、3轴磁力计、GPS采集数据经滤波、融合后实现对无人机姿态的感知，然后使用控制算法对无刷电机进行控制从而对无人机姿态进行控制和修正，使之自稳的同时能够响应人的宏观控制命令，地面站用来进行监控、参数设置、调试。主控为STM32，传感器为mpu6050+HMC5883，C++编写，IDE为MDK。姿态解算及融合算法主要使用互补滤波算法，控制主要使用PID控制及串级PID控制。

### Feature
* Basic fly stably with remote control
  * hardware
    * CPU : stm32f103c8t6
    * sensor : mpu6050 and MS561101BA module
    * PCB : create circuit schematics and first produce flight control board by hand
    * remote controller : four channel with pwm output
  * software
    * language : C++
    * IDE : MDK (version >= keil5 )
    * no operating system
