import sys
from scrapy.spider import Spider
import pymysql

db = pymysql.connect("127.0.0.1", "root", "12356789", "zuizuo_db", use_unicode=True, charset="utf8")

# 使用 cursor() 方法创建一个游标对象 cursor
cursor = db.cursor()

class DmozSpider(Spider):
    name = "mafengwo"
    allowed_domains = ["mafengwo.cn"]
    start_urls = [
        "http://www.mafengwo.cn/"
        # "https://voice.hupu.com/cba/"
    ]

    def parse(self, response):
        for item in response.xpath('//div[@class="news-list"]/ul/li'):
            title =[
                item.xpath('./div[@class="list-hd"]/h4/a/text()').extract(),
                item.xpath('./div[@class="list-hd"]/h4/a/@href').extract(),
                item.xpath('./div/span/span[@class="comeFrom"]/a/text()').extract()

            ]
            if title and title[0] and title[2] and title[1]:
                #print(title[0] + title[1] + title[2])
                # 使用预处理语句创建表
                # INSERT INTO `zuizuo_db`.`news` (`title`, `href`, `from`, `time`) VALUES ('1', '1', '1', '2018-01-07 14:39:56');
                sql = "INSERT INTO `zuizuo_db`.`news` (`title`, `href`, `from`) VALUES ('" + title[0][0] + "', '" + title[1][0] + "', '" + title[2][0] + "');"
                cursor.execute(sql)
                db.commit()

        # 关闭数据库连接
        db.close()