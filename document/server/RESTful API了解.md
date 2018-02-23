# RESTful API了解

Server提供的RESTful API中，URL中只使用名词来指定资源，原则上不使用动词。“资源”是REST架构或者说整个网络处理的核心。比如：
[http://api.qc.com/v1/newsfeed](https://link.zhihu.com/?target=http%3A//api.qc.com/v1/newsfeed): 获取某人的新鲜; 
[http://api.qc.com/v1/friends](https://link.zhihu.com/?target=http%3A//api.qc.com/v1/friends): 获取某人的好友列表;
[http://api.qc.com/v1/profile](https://link.zhihu.com/?target=http%3A//api.qc.com/v1/profile): 获取某人的详细信息;3. 用HTTP协议里的动词来实现资源的添加，修改，删除等操作。即通过HTTP动词来实现资源的状态扭转：
GET    用来获取资源，
POST  用来新建资源（也可以用于更新资源），
PUT    用来更新资源，
DELETE  用来删除资源。比如：
DELETE [http://api.qc.com/v1/](https://link.zhihu.com/?target=http%3A//api.qc.com/v1/friends)friends: 删除某人的好友 （在http parameter指定好友id）
POST [http://api.qc.com/v1/](https://link.zhihu.com/?target=http%3A//api.qc.com/v1/friends)friends: 添加好友
UPDATE [http://api.qc.com/v1/profile](https://link.zhihu.com/?target=http%3A//api.qc.com/v1/profile): 更新个人资料

禁止使用： GET [http://api.qc.com/v1/deleteFriend](https://link.zhihu.com/?target=http%3A//api.qc.com/v1/deleteFriend) 

Server的API如何设计才满足RESTful要求?

首先是简洁版里面的那几点。外加一些附带的 best practices：

1. URL root:

https://example.org/api/v1/

https://api.example.com/v1/

可以放在URL里面，也可以用HTTP的header：
/api/v1/

3. URI使用名词而不是动词，且推荐用复数。
BAD

- /getProducts

- /listOrders

- /retrieveClientByOrder?orderId=1

  GOOD


- GET /products : will return the list of all products
- POST /products : will add a product to the collection
- GET /products/4 : will retrieve product #4
- PATCH/PUT /products/4 : will update product #4

\4. 保证  HEAD 和 GET 方法是安全的，不会对资源状态有所改变（污染）。比如严格杜绝如下情况：
GET /deleteProduct?id=1
\5. 资源的地址推荐用嵌套结构。比如：
GET /friends/10375923/profile
UPDATE /profile/primaryAddress/city6. 警惕返回结果的大小。如果过大，及时进行分页（pagination）或者加入限制（limit）。HTTP协议支持分页（Pagination）操作，在Header中使用 Link 即可。
\7. 使用正确的HTTP Status Code表示访问状态：[HTTP/1.1: Status Code Definitions](https://link.zhihu.com/?target=http%3A//www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
\8. 在返回结果用明确易懂的文本（String。注意返回的错误是要给人看的，避免用 1001 这种错误信息），而且适当地加入注释。
\9. 关于安全：自己的接口就用https，加上一个key做一次hash放在最后即可。考虑到国情，HTTPS在无线网络里不稳定，可以使用Application Level的加密手段把整个HTTP的payload加密。有兴趣的朋友可以用手机连上电脑的共享Wi-Fi，然后用Charles监听微信的网络请求（发照片或者刷朋友圈）。
如果是平台的API，可以用成熟但是复杂的OAuth2，新浪微博这篇：[授权机制说明](https://link.zhihu.com/?target=http%3A//open.weibo.com/wiki/%25E6%258E%2588%25E6%259D%2583%25E6%259C%25BA%25E5%2588%25B6%25E8%25AF%25B4%25E6%2598%258E)