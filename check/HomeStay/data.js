//关于跳转
export var toOrderScreen=0

//关于房源
export const houseImageArr=[
    require("./Images/Home/Home_1_1.png"),
    require("./Images/Home/Home_2_1.png"),
    require("./Images/Home/Home_3_1.png"),
    require("./Images/Home/Home_4_1.png"),
    require("./Images/Home/Home_5_1.png"),
    require("./Images/Home/Home_6_1.png"),
    require("./Images/Home/Home_7_1.png"),
    require("./Images/Home/Home_8_1.png"),
]
export const nameArr=["顺德站大良步行街、清晖园、投影仪双床房","设计师的四合院，尽享荷花鱼池小院",
"北欧风/复式3居室","新世界/清晖园/步行街/华盖路",
"顺德左岸-阳台观景房201","现代轻奢复式两居室顺峰山公园华侨城乐园旁",
"给您一个五星级的家-恒大帝景假日欧式4居","【祖庙商圈15】铂顿城/百花广场/两居"]
// 1整套出租 2独立单间
export const houseSortArr=[1,0,1,1,0,1,0,1]
//1代表普通公寓 2代表酒店式公寓
export const apartmentSortArr=[1,1,1,0,0,1,1,1]
// 面积
export const areaArr=[100,20,80,90,30,120,20,90]



//卧室数量
export const bedRoomNumArr=[1,1,3,2,1,2,4,2]
//客厅数量
export const livingRoomNumArr=[1,1,1,1,1,1,2,1]
// 卫生间数量
export const toiletNumArr=[1,1,2,2,1,2,2,1]
//厨房数量
export const ketchenNumArr=[1,1,1,0,1,1,1,0]
//床数量
export const bedNumArr=[1,1,3,2,1,2,4,2]
//入住人数数量
export const guestNumArr=[2,2,6,4,2,4,9,3]
// 经济，舒适，高档
export const rentRankArr=[1,2,2,2,1,2,2,0]
export const descArr=new Array()
for(i=0;i<nameArr.length;i++){
    switch(rentRankArr[i]){
        case 0:
            rentRank="经济"
            break
        case 1:
            rentRank="舒适"
            break
        case 2:
            rentRank="高档"
            break
    }
    desc=rentRank+" · "+bedRoomNumArr[i]+"居"+bedNumArr[i]+
    "床"+guestNumArr[i]+"人 · "
    descArr.push(desc)
}
// bedNumArr=[1,1,3,2,1,2,4,2] 数据吻合
export const bedDetaiArr=["大床1张","大床1张",
"大床3张","大床2张","大床1张","大床2张","大床4张","大床2张"]
//连住优惠 需要与sort2Arr [1,0,1,1,0,1,1,0] 数据吻合
export const saleArr=[[{days:3,sale:"9.5"},{days:5,sale:"9.0"},{days:7,sale:"8.5"}],
[],
[{days:5,sale:"8.5"},{days:7,sale:"8.0"}],
[{days:30,sale:"7"}],
[],
[{days:15,sale:"8"}],
[{days:5,sale:"8.5"},{days:7,sale:"8.0"}],
[]
]
export var saleTextArr=new Array()
for(i=0;i<saleArr.length;i++){
    var saleText=""
    for(j=0;j<saleArr[i].length;j++){
        if(j==0)
            saleText="满"
        saleText=saleText+saleArr[i][j].days+"天"+saleArr[i][j].sale.toString()+"折"
        if(j<saleArr[i].length-1)
            saleText=saleText+"、"
    }
    saleTextArr.push(saleText)
}
// export const saleArr=["满3天9.5折、5天9.0折、7天8.5折",
//                         "",
//                         "满5天8.5折、7天8.0折",
//                         "满30天7.0折",
//                         "",
//                         "满15天8.0折",
//                         "满5天8.5折、7天8.0折",
//                         ""]
export const gradeArr=["5.0","4.7","5.0","5.0","4.8","5.0","4.9","4.9"]
export const commentNumArr=[4,55,31,46,19,10,14,18]
export const locationArr=["近顺德中心区(大良、容桂)","近金融高新区地铁站",
"近顺德中心区(大良、容桂)","近顺德中心区(大良、容桂)",
"近顺德中心区(大良、容桂)","近顺德中心区(大良、容桂)",
"近顺德中心区(大良、容桂)","近祖庙地铁站"]
export const priceArr=[216,288,525,428,198,488,1099,244]
// "优选","闪订","连住优惠","超赞新房"
export const sort0Arr=[1,0,1,1,1,0,0,1]
export const sort1Arr=[0,1,1,1,1,0,1,1]
export const sort2Arr=[1,0,1,1,0,1,1,0]
export const sort3Arr=[0,1,0,0,0,0,1,0]
export const isCollectArray=[]

//关于房东
export const headImageArr=[
    require("./Images/head/head_1.jpg"),
    require("./Images/head/head_2.jpg"), 
    require("./Images/head/head_3.jpg"),
    require("./Images/head/head_4.jpg"),
    require("./Images/head/head_5.jpg"),
    require("./Images/head/head_6.jpg"),
    require("./Images/head/head_7.jpg"),
    require("./Images/head/head_8.jpg"),
]
export const ownerNameArr=["静儿之家","佛山途掌柜","双喜","杰杰杰",
"做梦的天鹅","詹姆斯公寓","乐家连锁","洛奇"]
// 1-个人 0-商户 与apartmentSortArr=[1,1,1,0,0,1,1,1]数据吻合
export const ownerSortArr=[1,1,1,0,0,1,0,1]
//1-超赞房东 
export const isOwnerSuper=[0,0,1,0,0,1,0,0]
//房东电话
export const phoneNumberArr=[17056278656,
                            17133556677,
                            15088997766,
                            17078788765,
                            17156765678,
                            18112325676,
                            16055443765,
                            17099887766]
//关于设施
export const doHaveFArr=[[1,1,1,1,1,1,1,1,0,0,1,0],
                        [1,1,1,0,1,1,1,1,0,0,1,0],
                        [1,1,1,1,1,1,1,1,1,1,1,0],
                        [1,1,1,1,1,1,1,1,0,0,1,0],
                        [1,1,1,1,1,1,1,0,0,0,0,0],
                        [1,1,1,1,1,1,1,1,0,0,1,0],
                        [1,1,1,1,1,1,1,1,1,0,1,0],
                        [1,1,1,1,1,1,1,1,1,1,1,0]]
//关于发票
export const billArr=[0,1,0,0,1,1,0,1]
// //押金
// export const depositArr=[200,300,300,200,200,0,300,200]
//入住时间
//09月06日 0907 1 周五 周六
export const orderTime=["","",0,"",""]