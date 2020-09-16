import moment from "moment"

//开始和结束时间初始值为今天和明天
export var pickTimeArr=[
    moment(),
    moment().add(1,'days')
]