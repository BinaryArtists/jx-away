### 时间的玫瑰

*北岛*


> 当守门人沉睡  
你和风暴一起转身  
拥抱中老去的是  
时间的玫瑰  

> 当鸟路界定天空  
你回望那落日  
消失中呈现的是  
时间的玫瑰  

> 当刀在水中折弯  
你踏笛声过桥  
密谋中哭喊的是  
时间的玫瑰  

> 当笔画出地平线  
你被东方之锣惊醒  
回声中开放的是  
时间的玫瑰  

> 镜中永远是此刻  
此刻通向重生之门  
那门开向大海  
时间的玫瑰

### 架构

* App
  - Lifecycle
  - Global
  - App Comm
* Page
  - Router/Navigator
  - Lifecycle
  - Data Binding
  - Action Handler
  - Data Render
  - Page Comm
* Component
  - Lifecycle
  - Data Binding
  - Action Handler
  - Data Render
  - Page Comm
* ViewModel
  - Action Keeper + Event Dispatcher
  - Sharing Individual Data Model with View
    > 如何识别独立域？selector 以及 div tree？
  - Dealing with api
* Core
  - Logger
  - Error Handling
  - Assertion with debug mode ( Clear these code on production )
  - Event ( Notification Center providing many 2 many )
  - Signal ( Specific Observable for one 2 many )
  - 

### TODO

* [ ] page 、 viewmodel 一对多
* [ ] action 的自由分发
* [ ] viewmodel 中体现数据模型，更建议的操作数据模型
* [ ] viewmodel 数据模型容器，不可多viewmodel数据模型交叉污染
* [ ] 性能：  打开三个点菜单的性能面板，能看到启动耗时和切换页面耗时
