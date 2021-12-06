exports.chargingPointRMB =
{
        JGRMB1: {
            id: "JGRMB1",
            key: "jiguang.rmb.yueka1",//客户端ios使用
            price: 30,
            restrictions: { type: 1 },
            goods: [{ "count": 1000, "goodID": 5001 }],
            emailID: process.env.LC_APP_yuekaEmailID1,//默认31天
            text: "月卡1 小金币"
        },
        JGRMB2: {
            id: "JGRMB2",
            key: "jiguang.rmb.yueka02",
            _key: "jiguang.rmb.yueka2",
            price: 128,
            restrictions: { type: 1 },
            goods: [{ "count": 4000, "goodID": 5001 }],
            emailID: process.env.LC_APP_yuekaEmailID2,//默认31天
            text: "月卡2 大金币"
        },
        JGRMB3: {
            id: "JGRMB3",
            key: "jiguang.rmb.yueka03",
            _key: "jiguang.rmb.yueka3",
            price: 198,
            restrictions: { type: 1 },
            goods: [{ "count": 5000, "goodID": 5001 }],
            emailID: process.env.LC_APP_yuekaEmailID3,//默认31天
            text: "月卡3 10卷"
        },
        JGRMB4: {
            id: "JGRMB4",
            key: "jiguang.rmb.yueka4",
            price: 328,
            restrictions: { type: 1 },
            goods: [{ "count": 10000, "goodID": 5001 }],
            emailID: process.env.LC_APP_yuekaEmailID4,//默认31天
            text: "月卡4 20卷"
        },
        JGRMB94: {
            id: "JGRMB94",
            key: "jiguang.rmb.jb30",
            price: 30,
            restrictions: { type: 1 },
            goods: [{ "count": 1000, "goodID": 5001 }],
            emailID: process.env.LC_APP_yuekaEmailID5,//默认31天
            text: "每日关卡月卡"
        },
        JGRMB5: {
            id: "JGRMB5",
            key: "jiguang.rmb.czlb",
            price: 328,
            restrictions: { type: 2 },
            _goods: [{ "img": 1, "condition": 5, "type": 1, "count": 7000, "goodID": 5001 }, { "img": 2, "condition": 10, "type": 1, "count": 7000, "goodID": 5001 }, { "img": 3, "condition": 15, "type": 1, "count": 7000, "goodID": 5001 }, { "img": 4, "condition": 20, "type": 1, "count": 13000, "goodID": 5001 }, { "img": 5, "condition": 30, "type": 1, "count": 13000, "goodID": 5001 }, { "img": 6, "condition": 40, "type": 1, "count": 13000, "goodID": 5001 }, { "img": 7, "condition": 50, "type": 1, "count": 24000, "goodID": 5001 }, { "img": 8, "condition": 60, "type": 1, "count": 36000, "goodID": 5001 }],
            text: "成长礼包"
        },
        JGRMB6: {
            id: "JGRMB6",
            key: "jiguang.rmb.jzlb",
            price: 68,
            restrictions: { type: 2 },
            _goods: [{ "condition": 7, "type": 1, "count": 1, "goodID": 2511 }, { "condition": 10, "type": 1, "count": 1, "goodID": 2610 }, { "condition": 13, "type": 1, "count": 1, "goodID": 2716 }, { "condition": 16, "type": 1, "count": 3000, "goodID": 5003 }, { "condition": 19, "type": 1, "count": 1500000, "goodID": 5002 }, { "condition": 22, "type": 1, "count": 1, "goodID": 4025 }, { "condition": 25, "type": 1, "count": 1, "goodID": 4026 }, { "condition": 30, "type": 1, "count": 2, "goodID": 4027 }],
            text: "君主礼包"
        },
        JGRMBFREE: {
            id: "JGRMBFREE",
            key: "",
            price: 0,
            restrictions: { type: 2 },
            _goods: [{"condition":5,"type":2,"goods":[{"goodID":5001,"count":500},{"goodID":4022,"count":10}]},{"condition":10,"type":2,"goods":[{"goodID":5001,"count":1000},{"goodID":4022,"count":30}]},{"condition":15,"type":2,"goods":[{"goodID":5001,"count":1500},{"goodID":4022,"count":60}]},{"condition":20,"type":2,"goods":[{"goodID":5001,"count":2000},{"goodID":4022,"count":100}]},{"condition":40,"type":2,"goods":[{"goodID":5001,"count":4000},{"goodID":1158,"count":1}]},{"condition":60,"type":2,"goods":[{"goodID":5001,"count":6000},{"goodID":2252,"count":1}]},{"condition":80,"type":2,"goods":[{"goodID":5001,"count":8000},{"goodID":2070,"count":1}]},{"condition":99,"type":2,"goods":[{"goodID":5001,"count":10000},{"goodID":5134,"count":3}]}],
            text: "等级礼包"
        },
        JGRMB7: {
            id: "JGRMB7",
            key: "jiguang.rmb.jb6",
            price: 6,
            goods: [{ "count": 400, "goodID": 5001 }],//冲360 送40
            add5001: [{ "count": 320, "goodID": 5001 }],//首次充值送
            restrictions: { type: 1 },
            text: "一把金币"
        },
        JGRMB8: {
            id: "JGRMB8",
            key: "jiguang.rmb.jb30",
            price: 30,
            goods: [{ "count": 2000, "goodID": 5001 }],//1800 送200
            add5001: [{ "count": 1600, "goodID": 5001 }],//首次充值送
            restrictions: { type: 1 },
            text: "一小袋金币"
        },
        JGRMB9: {
            id: "JGRMB9",
            key: "jiguang.rmb.jb98",
            price: 98,
            goods: [{ "count": 6600, "goodID": 5001 }],//冲6000 送600
            add5001: [{ "count": 5400, "goodID": 5001 }],//首次充值送
            restrictions: { type: 1 },
            text: "一大袋金币"
        },
        JGRMB10: {
            id: "JGRMB10",
            key: "jiguang.rmb.jb288",
            price: 288,
            goods: [{ "count": 19580, "goodID": 5001 }],//冲17800 送1780
            add5001: [{ "count": 16020, "goodID": 5001 }],//首次充值送
            restrictions: { type: 1 },
            text: "一小桶金币"
        },
        JGRMB11: {
            id: "JGRMB11",
            key: "jiguang.rmb.jb548",
            price: 548,
            goods: [{ "count": 37400, "goodID": 5001 }],//冲34000 送3400
            add5001: [{ "count": 30600, "goodID": 5001 }],//首次充值送
            restrictions: { type: 1 },
            text: "一大桶金币"
        },
        JGRMB12: {
            id: "JGRMB12",
            key: "jiguang.rmb.jb648",
            price: 648,
            goods: [{ "count": 44000, "goodID": 5001 }],//冲40000 送4000
            add5001: [{ "count": 36000, "goodID": 5001 }],//首次充值送
            restrictions: { type: 1 },
            text: "一车子金币"
        },
        JGRMB13: {
            id: "JGRMB13",
            key: "jiguang.rmb.lb1",
            price: 1,
            goods: [
                {
                    "goodID": 5001,
                    "count": 120
                },
                {
                    "goodID": 5002,
                    "count": 20000
                },
                {
                    "goodID": 4001,
                    "count": 5
                },
                {
                    "goodID": 4004,
                    "count": 5
                },
                {
                    "goodID": 4016,
                    "count": 10
                }
            ],
            restrictions: { type: 4 },
            text: "1元礼包"
        },
        JGRMB14: {
            id: "JGRMB14",
            key: "jiguang.rmb.lb3",
            price: 3,
            goods: [
                {
                    "goodID": 5001,
                    "count": 360
                },
                {
                    "goodID": 5002,
                    "count": 60000
                },
                {
                    "goodID": 4003,
                    "count": 5
                },
                {
                    "goodID": 4004,
                    "count": 5
                },
                {
                    "goodID": 4021,
                    "count": 10
                }
            ],
            restrictions: { type: 4 },
            text: "3元礼包"
        },
        JGRMB15: {
            id: "JGRMB15",
            key: "jiguang.rmb.lb6",
            price: 6,
            goods: [
                {
                    "goodID": 5001,
                    "count": 720
                },
                {
                    "goodID": 5002,
                    "count": 120000
                },
                {
                    "goodID": 4005,
                    "count": 5
                },
                {
                    "goodID": 4006,
                    "count": 5
                },
                {
                    "goodID": 4017,
                    "count": 10
                }
            ],
            restrictions: { type: 4 },
            text: "6元宝物碎片礼包"
        },
        JGRMB16: {
            id: "JGRMB16",
            key: "jiguang.rmb.lb12",
            price: 12,
            goods: [
                {
                    "goodID": 4007,
                    "count": 20
                },
                {
                    "goodID": 4005,
                    "count": 30
                },
                {
                    "goodID": 4006,
                    "count": 30
                },
                {
                    "goodID": 5003,
                    "count": 200
                }
            ],
            restrictions: { type: 4 },
            text: "7-14天的10元礼包"
        },
        JGRMB17: {
            id: "JGRMB17",
            key: "jiguang.rmb.lb6",
            price: 6,
            goods: [{
                "goodID": 5001,
                "count": 360
            },
            {
                "goodID": 5002,
                "count": 60000
            },
            {
                "goodID": 5003,
                "count": 100
            }],
            restrictions: { type: 4 },
            text: "1-7天的6元礼包"
        },
        JGRMB18: {
            id: "JGRMB18",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods:
                [
                    {
                        "goodID": 5012,
                        "count": 2000
                    },
                    {
                        "goodID": 5019,
                        "count": 50
                    },
                    {
                        "goodID": 5002,
                        "count": 3000000
                    }
                ],
            restrictions: { type: 3 },
            text: "98元强化礼包"
        },
        JGRMB19: {
            id: "JGRMB19",
            key: "jiguang.rmb.lb208",
            price: 208,
            goods: [{
                "goodID": 5001,
                "count": 60000
            },
            {
                "goodID": 5002,
                "count": 30000
            },
            {
                "goodID": 4017,
                "count": 450
            }],
            restrictions: { type: 3 },
            text: "208礼包"
        },
        JGRMB20: {
            id: "JGRMB20",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [
                { "goodID": 5012, "count": 5000 },
                { "goodID": 5019, "count": 100 },
                { "goodID": 5002, "count": 10000000 }
            ],
            restrictions: { type: 3 },
            text: "288打造礼包"
        },
        JGRMB21: {
            id: "JGRMB21",
            key: "jiguang.rmb.lb518",
            price: 518,
            goods: [{
                "goodID": 5001,
                "count": 60000
            },
            {
                "goodID": 5002,
                "count": 30000
            },
            {
                "goodID": 4017,
                "count": 450
            }],
            restrictions: { type: 3 },
            text: "518礼包"
        },
        JGRMB22: {
            id: "JGRMB22",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [{
                "goodID": 5001,
                "count": 60000
            },
            {
                "goodID": 5002,
                "count": 30000
            },
            {
                "goodID": 4017,
                "count": 450
            }],
            restrictions: { type: 3 },
            text: "648礼包"
        },
        JGRMB23: {
            id: "JGRMB23",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{
                "goodID": 5014,
                "count": 225
            }],
            restrictions: { type: 1 },
            text: "中级强化包"
        },
        JGRMB24: {
            id: "JGRMB24",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [{
                "goodID": 5013,
                "count": 100
            },
            {
                "goodID": 5014,
                "count": 50
            }],
            restrictions: { type: 1 },
            text: "初级强化包"
        },
        JGRMB25: {
            id: "JGRMB25",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{
                "goodID": 5012,
                "count": 3000
            },
            {
                "goodID": 5002,
                "count": 5000000
            }],
            restrictions: { type: 1 },
            text: "萃铁石礼包"
        },
        JGRMB26: {
            id: "JGRMB26",
            key: "jiguang.rmb.lb518",
            price: 518,
            goods: [{
                "goodID": 5020,
                "count": 10
            },
            {
                "goodID": 5002,
                "count": 5000000
            }],
            restrictions: { type: 1 },
            text: "神铁贴礼包"
        },
        JGRMB27: {
            id: "JGRMB27",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{
                "goodID": 5019,
                "count": 100
            },
            {
                "goodID": 5002,
                "count": 3000000
            }],
            restrictions: { type: 1 },
            text: "重铸石礼包"
        },
        JGRMB28: {
            id: "JGRMB28",
            key: "jiguang.rmb.lb6",
            price: 6,
            goods: [{
                "goodID": 5023,
                "count": 10
            },
            {
                "goodID": 5002,
                "count": 12000
            }],
            restrictions: { type: 1 },
            text: "小积分礼包"
        },
        JGRMB29: {
            id: "JGRMB29",
            key: "jiguang.rmb.lb208",
            price: 208,
            goods: [{
                "goodID": 5023,
                "count": 350
            },
            {
                "goodID": 5002,
                "count": 420000
            }],
            restrictions: { type: 1 },
            text: "普通积分礼包"
        },
        JGRMB30: {
            id: "JGRMB30",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [{
                "goodID": 5023,
                "count": 1100
            },
            {
                "goodID": 5002,
                "count": 1300000
            }],
            restrictions: { type: 1 },
            text: "豪华积分礼包"
        },
        JGRMB31: {
            id: "JGRMB31",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [
                {
                    "goodID": 5012,
                    "count": 1000
                },
                {
                    "goodID": 5019,
                    "count": 50
                },
                {
                    "goodID": 5002,
                    "count": 1000000
                }],
            restrictions: { type: 1 },
            text: "中秋98礼包"
        },
        JGRMB32: {
            id: "JGRMB32",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{
                "goodID": 5001,
                "count": 10000
            },
            {
                "goodID": 5002,
                "count": 3000000
            },
            {
                "goodID": 4007,
                "count": 840
            },
            {
                "goodID": 4017,
                "count": 500
            },
            {
                "goodID": 5025,
                "count": 300
            }],
            restrictions: { type: 1 },
            text: "中秋288礼包"
        },
        JGRMB33: {
            id: "JGRMB33",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [{
                "goodID": 5001,
                "count": 12000
            },
            {
                "goodID": 5013,
                "count": 100
            },
            {
                "goodID": 5012,
                "count": 2000
            },
            {
                "goodID": 5027,
                "count": 100
            },
            {
                "goodID": 4001,
                "count": 100
            },
            {
                "goodID": 4003,
                "count": 100
            },
            {
                "goodID": 4004,
                "count": 100
            },
            {
                "goodID": 4005,
                "count": 100
            },
            {
                "goodID": 4006,
                "count": 100
            }],
            restrictions: { type: 1 },
            text: "国庆98礼包"
        },
        JGRMB34: {
            id: "JGRMB34",
            key: "jiguang.rmb.lb208",
            price: 208,
            goods: [{
                "goodID": 5001,
                "count": 25700
            },
            {
                "goodID": 5014,
                "count": 100
            },
            {
                "goodID": 5019,
                "count": 100
            },
            {
                "goodID": 5027,
                "count": 200
            },
            {
                "goodID": 4001,
                "count": 200
            },
            {
                "goodID": 4003,
                "count": 200
            },
            {
                "goodID": 4004,
                "count": 200
            },
            {
                "goodID": 4005,
                "count": 200
            },
            {
                "goodID": 4006,
                "count": 200
            }],
            restrictions: { type: 1 },
            text: "国庆208礼包"
        },
        JGRMB35: {
            id: "JGRMB35",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{
                "goodID": 5001,
                "count": 35600
            },
            {
                "goodID": 5015,
                "count": 100
            },
            {
                "goodID": 5020,
                "count": 10
            },
            {
                "goodID": 5027,
                "count": 300
            },
            {
                "goodID": 4001,
                "count": 300
            },
            {
                "goodID": 4003,
                "count": 300
            },
            {
                "goodID": 4004,
                "count": 300
            },
            {
                "goodID": 4005,
                "count": 300
            },
            {
                "goodID": 4006,
                "count": 300
            }],
            restrictions: { type: 1 },
            text: "国庆288礼包"
        },
        JGRMB36: {
            id: "JGRMB36",
            key: "jiguang.rmb.lb12",
            price: 12,
            goods: [{
                "goodID": 5001,
                "count": 1500
            },
            {
                "goodID": 5003,
                "count": 200
            },
            {
                "goodID": 4004,
                "count": 50
            },
            {
                "goodID": 4017,
                "count": 20
            }],
            restrictions: { type: 1 },
            text: "战棋三国贰12元特惠礼包"
        },
        JGRMB37: {
            id: "JGRMB37",
            key: "jiguang.rmb.jb30",
            price: 30,
            goods: [{
                "goodID": 5002,
                "count": 1000000
            },
            {
                "goodID": 4007,
                "count": 50
            },
            {
                "goodID": 5012,
                "count": 200
            },
            {
                "goodID": 4018,
                "count": 1
            }],
            restrictions: { type: 1 },
            text: "战棋三国贰30元特惠礼包"
        },
        JGRMB38: {
            id: "JGRMB38",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [
                {
                    "goodID": 4027,
                    "count": 1
                },
                {
                    "goodID": 4022,
                    "count": 111
                },
                {
                    "goodID": 4004,
                    "count": 111
                },
                {
                    "goodID": 5012,
                    "count": 111
                },
                {
                    "goodID": 4007,
                    "count": 111
                },
                {
                    "goodID": 4017,
                    "count": 111
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰双十一98元狂欢礼包"
        },
        JGRMB39: {
            id: "JGRMB39",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [
                {
                    "goodID": 4030,
                    "count": 1
                },
                {
                    "goodID": 5001,
                    "count": 88888
                },
                {
                    "goodID": 5012,
                    "count": 1111
                },
                {
                    "goodID": 4004,
                    "count": 1111
                },
                {
                    "goodID": 5003,
                    "count": 1111
                },
                {
                    "goodID": 5030,
                    "count": 1
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰双十一648元劲爆礼包"
        },
        JGRMB40: {
            id: "JGRMB40",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [
                { "goodID": 5001, "count": 88888 },
                { "goodID": 5003, "count": 111 },
                { "goodID": 4017, "count": 111 },
                { "goodID": 5012, "count": 111 },
                { "goodID": 4007, "count": 111 }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰双十一648元专享礼包"
        },
        JGRMB41: {
            id: "JGRMB41",
            key: "jiguang.rmb.lb6",
            price: 6,
            goods: [
                {
                    "goodID": 5001,
                    "count": 600
                },
                {
                    "goodID": 5002,
                    "count": 120000
                },
                {
                    "goodID": 4004,
                    "count": 10
                },
                {
                    "goodID": 4001,
                    "count": 10
                },
                {
                    "goodID": 4003,
                    "count": 10
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰6元特惠礼包"
        },
        JGRMB42: {
            id: "JGRMB42",
            key: "jiguang.rmb.jb30",
            price: 30,
            goods: [
                {
                    "goodID": 5013,
                    "count": 50
                },
                {
                    "goodID": 5014,
                    "count": 15
                },
                {
                    "goodID": 5012,
                    "count": 100
                },
                {
                    "goodID": 5002,
                    "count": 500000
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰30元强化礼包"
        },
        JGRMB43: {
            id: "JGRMB43",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [{ "goodID": 5001, "count": 3888 }, { "goodID": 5002, "count": 888888 }, { "goodID": 4022, "count": 60 }, { "goodID": 5012, "count": 888 }, { "goodID": 5021, "count": 1 }],
            restrictions: { type: 1 },
            text: "感恩节回馈礼包"
        },
        JGRMB44: {
            id: "JGRMB44",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [{ "goodID": 5001, "count": 3888 }, { "goodID": 5002, "count": 888888 }, { "goodID": 4022, "count": 60 }, { "goodID": 5003, "count": 2000 }, { "goodID": 4017, "count": 50 }],
            restrictions: { type: 1 },
            text: "感恩节回馈礼包"
        },
        JGRMB45: {
            id: "JGRMB45",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [
                {
                    "goodID": 5001,
                    "count": 8888
                },
                {
                    "goodID": 5019,
                    "count": 20
                },
                {
                    "goodID": 4022,
                    "count": 80
                },
                {
                    "goodID": 5012,
                    "count": 1888
                },
                {
                    "goodID": 5021,
                    "count": 1
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰双十二全民礼包"
        },
        JGRMB46: {
            id: "JGRMB46",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [
                {
                    "goodID": 4017,
                    "count": 120
                },
                {
                    "goodID": 4022,
                    "count": 120
                },
                {
                    "goodID": 4004,
                    "count": 1212
                },
                {
                    "goodID": 5003,
                    "count": 1212
                },
                {
                    "goodID": 5002,
                    "count": 3888888
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰双十二大浪礼包"
        },
        JGRMB47: {
            id: "JGRMB47",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [
                {
                    "goodID": 5001,
                    "count": 88888
                },
                {
                    "goodID": 5003,
                    "count": 8888
                },
                {
                    "goodID": 4004,
                    "count": 1212
                },
                {
                    "goodID": 4006,
                    "count": 1212
                },
                {
                    "goodID": 5012,
                    "count": 1888
                },
                {
                    "goodID": 4016,
                    "count": 120
                },
                {
                    "goodID": 4022,
                    "count": 120
                },
                {
                    "goodID": 5020,
                    "count": 3
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰双十二四季缤纷礼包"
        },
        JGRMB48: {
            id: "JGRMB48",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [
                {
                    "goodID": 5001,
                    "count": 88888
                },
                {
                    "goodID": 4030,
                    "count": 1
                },
                {
                    "goodID": 4001,
                    "count": 1212
                },
                {
                    "goodID": 4003,
                    "count": 1212
                },
                {
                    "goodID": 4004,
                    "count": 1212
                },
                {
                    "goodID": 4005,
                    "count": 1212
                },
                {
                    "goodID": 4006,
                    "count": 1212
                },
                {
                    "goodID": 5030,
                    "count": 1
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰双十二冬日暖阳礼包"
        },
        JGRMB49: {
            id: "JGRMB49",
            key: "jiguang.rmb.jb30",
            price: 30,
            goods: [
                {
                    "goodID": 5013,
                    "count": 25
                },
                {
                    "goodID": 5014,
                    "count": 10
                },
                {
                    "goodID": 5012,
                    "count": 100
                },
                {
                    "goodID": 4004,
                    "count": 300
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰30元每日礼包"
        },
        JGRMB50: {
            id: "JGRMB50",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [
                {
                    "goodID": 5001,
                    "count": 8888
                },
                {
                    "goodID": 5010,
                    "count": 6666
                },
                {
                    "goodID": 5003,
                    "count": 8888
                },
                {
                    "goodID": 4016,
                    "count": 666
                },
                {
                    "goodID": 5020,
                    "count": 3
                },
                {
                    "goodID": 5031,
                    "count": 200
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰平安夜礼包"
        },
        JGRMB51: {
            id: "JGRMB51",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [
                {
                    "goodID": 5001,
                    "count": 8888
                },
                {
                    "goodID": 5010,
                    "count": 8888
                },
                {
                    "goodID": 5003,
                    "count": 8888
                },
                {
                    "goodID": 5012,
                    "count": 8888
                },
                {
                    "goodID": 5019,
                    "count": 88
                },
                {
                    "goodID": 5031,
                    "count": 300
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰圣诞节礼包"
        },
        JGRMB52: {
            id: "JGRMB52",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [
                {
                    "goodID": 5001,
                    "count": 8888
                },
                {
                    "goodID": 5010,
                    "count": 8888
                },
                {
                    "goodID": 5003,
                    "count": 8888
                },
                {
                    "goodID": 4007,
                    "count": 1588
                },
                {
                    "goodID": 5015,
                    "count": 88
                },
                {
                    "goodID": 5031,
                    "count": 300
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰元旦节礼包"
        },
        JGRMB53: {
            id: "JGRMB53",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [
                {
                    "goodID": 5001,
                    "count": 18888
                },
                {
                    "goodID": 4001,
                    "count": 888
                },
                {
                    "goodID": 4003,
                    "count": 888
                },
                {
                    "goodID": 4005,
                    "count": 888
                },
                {
                    "goodID": 4006,
                    "count": 888
                },
                {
                    "goodID": 4004,
                    "count": 888
                },
                {
                    "goodID": 4038,
                    "count": 1
                },
                {
                    "goodID": 5031,
                    "count": 200
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰平安节礼包"
        },
        JGRMB54: {
            id: "JGRMB54",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [
                {
                    "goodID": 5001,
                    "count": 88888
                },
                {
                    "goodID": 5010,
                    "count": 8888
                },
                {
                    "goodID": 5003,
                    "count": 8888
                },
                {
                    "goodID": 5021,
                    "count": 5
                },
                {
                    "goodID": 5015,
                    "count": 88
                },
                {
                    "goodID": 4037,
                    "count": 1
                },
                {
                    "goodID": 5031,
                    "count": 300
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰圣诞礼包"
        },
        JGRMB55: {
            id: "JGRMB55",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [
                {
                    "goodID": 5001,
                    "count": 18888
                },
                {
                    "goodID": 5010,
                    "count": 8888
                },
                {
                    "goodID": 5003,
                    "count": 8888
                },
                {
                    "goodID": 4007,
                    "count": 1288
                },
                {
                    "goodID": 5019,
                    "count": 88
                },
                {
                    "goodID": 4039,
                    "count": 1
                },
                {
                    "goodID": 5031,
                    "count": 300
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰元旦礼包"
        },
        JGRMB56: {
            id: "JGRMB56",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [
                {
                    "goodID": 5031,
                    "count": 1700
                },
                {
                    "goodID": 5020,
                    "count": 8
                },
                {
                    "goodID": 5012,
                    "count": 3888
                },
                {
                    "goodID": 5003,
                    "count": 8888
                },
                {
                    "goodID": 5015,
                    "count": 88
                },
                {
                    "goodID": 5011,
                    "count": 88
                },
                {
                    "goodID": 5021,
                    "count": 3
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰跨年糖果礼盒"
        },
        JGRMB57: {
            id: "JGRMB57",
            key: "jiguang.rmb.lb208",
            price: 208,
            goods: [
                {
                    "goodID": 5031,
                    "count": 300
                },
                {
                    "goodID": 5001,
                    "count": 28888
                },
                {
                    "goodID": 4018,
                    "count": 1
                },
                {
                    "goodID": 5021,
                    "count": 1
                },
                {
                    "goodID": 4016,
                    "count": 188
                },
                {
                    "goodID": 4022,
                    "count": 88
                },
                {
                    "goodID": 5003,
                    "count": 1888
                },
                {
                    "goodID": 5012,
                    "count": 888
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰跨年糖果礼袋"
        },
        JGRMB58: {
            id: "JGRMB58",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [
                {
                    "goodID": 5001,
                    "count": 18888
                },
                {
                    "goodID": 4001,
                    "count": 388
                },
                {
                    "goodID": 4003,
                    "count": 388
                },
                {
                    "goodID": 4004,
                    "count": 388
                },
                {
                    "goodID": 4005,
                    "count": 388
                },
                {
                    "goodID": 4006,
                    "count": 388
                },
                {
                    "goodID": 4018,
                    "count": 1
                },
                {
                    "goodID": 5021,
                    "count": 1
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰跨年礼包"
        },
        JGRMB59: {
            id: "JGRMB59",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [
                {
                    "goodID": 5001,
                    "count": 28888
                },
                {
                    "goodID": 5010,
                    "count": 1888
                },
                {
                    "goodID": 4016,
                    "count": 188
                },
                {
                    "goodID": 4022,
                    "count": 88
                },
                {
                    "goodID": 5011,
                    "count": 88
                },
                {
                    "goodID": 4007,
                    "count": 88
                },
                {
                    "goodID": 5021,
                    "count": 1
                },
                {
                    "goodID": 4018,
                    "count": 1
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰欢送元旦礼包"
        },
        JGRMB60: {
            id: "JGRMB60",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [
                {
                    "goodID": 5001,
                    "count": 28888
                },
                {
                    "goodID": 4004,
                    "count": 666
                },
                {
                    "goodID": 4006,
                    "count": 666
                },
                {
                    "goodID": 4005,
                    "count": 666
                },
                {
                    "goodID": 5015,
                    "count": 88
                },
                {
                    "goodID": 4007,
                    "count": 88
                },
                {
                    "goodID": 5021,
                    "count": 1
                },
                {
                    "goodID": 4018,
                    "count": 1
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰欢送元旦礼袋"
        },
        JGRMB61: {
            id: "JGRMB61",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [
                {
                    "goodID": 5021,
                    "count": 5
                },
                {
                    "goodID": 4007,
                    "count": 88
                },
                {
                    "goodID": 2602,
                    "count": 1
                },
                {
                    "goodID": 4004,
                    "count": 588
                },
                {
                    "goodID": 4005,
                    "count": 588
                },
                {
                    "goodID": 4006,
                    "count": 588
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰温情腊八节礼袋"
        },
        JGRMB62: {
            id: "JGRMB62",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [
                {
                    "goodID": 5012,
                    "count": 1888
                },
                {
                    "goodID": 4007,
                    "count": 88
                },
                {
                    "goodID": 2606,
                    "count": 1
                },
                {
                    "goodID": 4004,
                    "count": 588
                },
                {
                    "goodID": 4005,
                    "count": 588
                },
                {
                    "goodID": 4006,
                    "count": 588
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰温情腊八礼袋"
        },
        JGRMB63: {
            id: "JGRMB63",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [
                {
                    "goodID": 5020,
                    "count": 15
                },
                {
                    "goodID": 5010,
                    "count": 8888
                },
                {
                    "goodID": 5012,
                    "count": 3888
                },
                {
                    "goodID": 4039,
                    "count": 1
                },
                {
                    "goodID": 5011,
                    "count": 88
                },
                {
                    "goodID": 4007,
                    "count": 88
                },
                {
                    "goodID": 5015,
                    "count": 88
                },
                {
                    "goodID": 5021,
                    "count": 1
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰浓情腊八节礼盒"
        },
        JGRMB64: {
            id: "JGRMB64",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [
                {
                    "goodID": 5001,
                    "count": 88888
                },
                {
                    "goodID": 5003,
                    "count": 13888
                },
                {
                    "goodID": 4030,
                    "count": 1
                },
                {
                    "goodID": 5011,
                    "count": 88
                },
                {
                    "goodID": 4017,
                    "count": 88
                },
                {
                    "goodID": 5014,
                    "count": 88
                },
                {
                    "goodID": 5020,
                    "count": 1
                },
                {
                    "goodID": 5021,
                    "count": 1
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰浓情腊八礼盒"
        },
        JGRMB65: {
            id: "JGRMB65",
            key: "jiguang.rmb.jb30",
            price: 30,
            goods: [
                {
                    "goodID": 3010,
                    "count": 50
                },
                {
                    "goodID": 3020,
                    "count": 50
                },
                {
                    "goodID": 3038,
                    "count": 50
                },
                {
                    "goodID": 3037,
                    "count": 50
                },
                {
                    "goodID": 4007,
                    "count": 50
                },
                {
                    "goodID": 4017,
                    "count": 50
                },
                {
                    "goodID": 4021,
                    "count": 10
                },
                {
                    "goodID": 2712,
                    "count": 1
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰开服钜惠礼包"
        },
        JGRMB66: {
            id: "JGRMB66",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [
                {
                    "goodID": 5003,
                    "count": 41888
                },
                {
                    "goodID": 4038,
                    "count": 1
                },
                {
                    "goodID": 5020,
                    "count": 1
                },
                {
                    "goodID": 4001,
                    "count": 888
                },
                {
                    "goodID": 4003,
                    "count": 888
                },
                {
                    "goodID": 4004,
                    "count": 888
                },
                {
                    "goodID": 4005,
                    "count": 888
                },
                {
                    "goodID": 4006,
                    "count": 888
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰小年超值功绩礼包"
        },
        JGRMB67: {
            id: "JGRMB67",
            key: "jiguang.rmb.lb208",
            price: 208,
            goods: [
                {
                    "goodID": 5013,
                    "count": 88
                },
                {
                    "goodID": 5014,
                    "count": 88
                },
                {
                    "goodID": 5015,
                    "count": 88
                },
                {
                    "goodID": 5012,
                    "count": 1888
                },
                {
                    "goodID": 5019,
                    "count": 38
                },
                {
                    "goodID": 5020,
                    "count": 1
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰小年超值强化礼包"
        },
        JGRMB68: {
            id: "JGRMB68",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [
                {
                    "goodID": 5002,
                    "count": 10000000
                },
                {
                    "goodID": 2606,
                    "count": 1
                },
                {
                    "goodID": 4017,
                    "count": 88
                },
                {
                    "goodID": 4001,
                    "count": 188
                },
                {
                    "goodID": 4003,
                    "count": 188
                },
                {
                    "goodID": 4004,
                    "count": 188
                },
                {
                    "goodID": 4005,
                    "count": 188
                },
                {
                    "goodID": 4006,
                    "count": 188
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰小年超值银币礼包"
        },
        JGRMB69: {
            id: "JGRMB69",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [
                {
                    "goodID": 4007,
                    "count": 1500
                },
                {
                    "goodID": 5030,
                    "count": 1
                },
                {
                    "goodID": 4037,
                    "count": 1
                },
                {
                    "goodID": 4001,
                    "count": 888
                },
                {
                    "goodID": 4003,
                    "count": 888
                },
                {
                    "goodID": 4004,
                    "count": 888
                },
                {
                    "goodID": 4005,
                    "count": 888
                },
                {
                    "goodID": 4006,
                    "count": 888
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰欢庆除夕礼包"
        },
        JGRMB70: {
            id: "JGRMB70",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [
                {
                    "goodID": 5012,
                    "count": 5000
                },
                {
                    "goodID": 5003,
                    "count": 3888
                },
                {
                    "goodID": 4027,
                    "count": 1
                },
                {
                    "goodID": 4022,
                    "count": 88
                },
                {
                    "goodID": 4016,
                    "count": 88
                },
                {
                    "goodID": 4013,
                    "count": 5
                },
                {
                    "goodID": 4014,
                    "count": 5
                },
                {
                    "goodID": 4015,
                    "count": 5
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰欢乐除夕礼包"
        },
        JGRMB71: {
            id: "JGRMB71",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [
                {
                    "goodID": 5002,
                    "count": 10000000
                },
                {
                    "goodID": 4007,
                    "count": 88
                },
                {
                    "goodID": 2708,
                    "count": 1
                },
                {
                    "goodID": 5021,
                    "count": 1
                },
                {
                    "goodID": 4003,
                    "count": 188
                },
                {
                    "goodID": 4004,
                    "count": 188
                },
                {
                    "goodID": 4005,
                    "count": 188
                },
                {
                    "goodID": 4006,
                    "count": 188
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰欢快除夕礼包"
        },
        JGRMB72: {
            id: "JGRMB72",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [
                {
                    "goodID": 5001,
                    "count": 88888
                },
                {
                    "goodID": 5030,
                    "count": 1
                },
                {
                    "goodID": 4039,
                    "count": 1
                },
                {
                    "goodID": 5015,
                    "count": 88
                },
                {
                    "goodID": 5011,
                    "count": 88
                },
                {
                    "goodID": 4004,
                    "count": 888
                },
                {
                    "goodID": 4005,
                    "count": 888
                },
                {
                    "goodID": 4006,
                    "count": 888
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰喜庆春节礼包"
        },
        JGRMB73: {
            id: "JGRMB73",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [
                {
                    "goodID": 5023,
                    "count": 600
                },
                {
                    "goodID": 5001,
                    "count": 3888
                },
                {
                    "goodID": 5003,
                    "count": 3888
                },
                {
                    "goodID": 4029,
                    "count": 1
                },
                {
                    "goodID": 4017,
                    "count": 88
                },
                {
                    "goodID": 4011,
                    "count": 5
                },
                {
                    "goodID": 4012,
                    "count": 5
                },
                {
                    "goodID": 4018,
                    "count": 1
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰喜乐春节礼包"
        },
        JGRMB74: {
            id: "JGRMB74",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [
                {
                    "goodID": 5010,
                    "count": 10888
                },
                {
                    "goodID": 4022,
                    "count": 88
                },
                {
                    "goodID": 4016,
                    "count": 88
                },
                {
                    "goodID": 5020,
                    "count": 1
                },
                {
                    "goodID": 4021,
                    "count": 10
                },
                {
                    "goodID": 4013,
                    "count": 3
                },
                {
                    "goodID": 4014,
                    "count": 3
                },
                {
                    "goodID": 4015,
                    "count": 3
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰喜迎春节礼包"
        },
        JGRMB75: {
            id: "JGRMB75",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [
                {
                    "goodID": 5030,
                    "count": 1
                },
                {
                    "goodID": 5003,
                    "count": 30000
                },
                {
                    "goodID": 4007,
                    "count": 188
                },
                {
                    "goodID": 5020,
                    "count": 1
                },
                {
                    "goodID": 4001,
                    "count": 888
                },
                {
                    "goodID": 4004,
                    "count": 888
                },
                {
                    "goodID": 4005,
                    "count": 888
                },
                {
                    "goodID": 4006,
                    "count": 888
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰小年夜神器功绩礼包"
        },
        JGRMB76: {
            id: "JGRMB76",
            key: "jiguang.rmb.lb208",
            price: 208,
            goods: [
                {
                    "goodID": 5010,
                    "count": 20888
                },
                {
                    "goodID": 5001,
                    "count": 2888
                },
                {
                    "goodID": 4022,
                    "count": 88
                },
                {
                    "goodID": 4017,
                    "count": 88
                },
                {
                    "goodID": 5014,
                    "count": 50
                },
                {
                    "goodID": 4007,
                    "count": 50
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰小年夜巅峰币礼包"
        },
        JGRMB77: {
            id: "JGRMB77",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [
                {
                    "goodID": 5023,
                    "count": 260
                },
                {
                    "goodID": 5010,
                    "count": 1888
                },
                {
                    "goodID": 2609,
                    "count": 1
                },
                {
                    "goodID": 4001,
                    "count": 388
                },
                {
                    "goodID": 4003,
                    "count": 388
                },
                {
                    "goodID": 4004,
                    "count": 388
                },
                {
                    "goodID": 4005,
                    "count": 388
                },
                {
                    "goodID": 4006,
                    "count": 388
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰小年夜积分礼包"
        },
        JGRMB78: {
            id: "JGRMB78",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [
                {
                    "goodID": 5021,
                    "count": 40
                },
                {
                    "goodID": 4037,
                    "count": 1
                },
                {
                    "goodID": 4007,
                    "count": 188
                },
                {
                    "goodID": 5020,
                    "count": 1
                },
                {
                    "goodID": 4001,
                    "count": 888
                },
                {
                    "goodID": 4004,
                    "count": 888
                },
                {
                    "goodID": 4005,
                    "count": 888
                },
                {
                    "goodID": 4006,
                    "count": 888
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰欢庆除夕夜礼包"
        },
        JGRMB79: {
            id: "JGRMB79",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [
                {
                    "goodID": 5012,
                    "count": 5000
                },
                {
                    "goodID": 5003,
                    "count": 3888
                },
                {
                    "goodID": 4022,
                    "count": 88
                },
                {
                    "goodID": 4017,
                    "count": 88
                },
                {
                    "goodID": 4016,
                    "count": 88
                },
                {
                    "goodID": 4013,
                    "count": 5
                },
                {
                    "goodID": 4014,
                    "count": 5
                },
                {
                    "goodID": 4015,
                    "count": 5
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰欢乐除夕夜礼包"
        },
        JGRMB80: {
            id: "JGRMB80",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [
                {
                    "goodID": 4007,
                    "count": 258
                },
                {
                    "goodID": 2708,
                    "count": 1
                },
                {
                    "goodID": 5021,
                    "count": 1
                },
                {
                    "goodID": 4001,
                    "count": 188
                },
                {
                    "goodID": 4003,
                    "count": 188
                },
                {
                    "goodID": 4004,
                    "count": 188
                },
                {
                    "goodID": 4005,
                    "count": 188
                },
                {
                    "goodID": 4006,
                    "count": 188
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰欢快除夕夜礼包"
        },
        JGRMB81: {
            id: "JGRMB81",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [
                {
                    "goodID": 5001,
                    "count": 88888
                },
                {
                    "goodID": 5030,
                    "count": 1
                },
                {
                    "goodID": 4039,
                    "count": 1
                },
                {
                    "goodID": 5015,
                    "count": 88
                },
                {
                    "goodID": 5021,
                    "count": 1
                },
                {
                    "goodID": 4004,
                    "count": 888
                },
                {
                    "goodID": 4005,
                    "count": 888
                },
                {
                    "goodID": 4006,
                    "count": 888
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰喜庆新年礼包"
        },
        JGRMB82: {
            id: "JGRMB82",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [
                {
                    "goodID": 5023,
                    "count": 600
                },
                {
                    "goodID": 5001,
                    "count": 3888
                },
                {
                    "goodID": 5003,
                    "count": 3888
                },
                {
                    "goodID": 4029,
                    "count": 1
                },
                {
                    "goodID": 4017,
                    "count": 88
                },
                {
                    "goodID": 4011,
                    "count": 5
                },
                {
                    "goodID": 4012,
                    "count": 5
                },
                {
                    "goodID": 4018,
                    "count": 1
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰喜乐新年礼包"
        },
        JGRMB83: {
            id: "JGRMB83",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [
                {
                    "goodID": 5010,
                    "count": 10888
                },
                {
                    "goodID": 4022,
                    "count": 88
                },
                {
                    "goodID": 4016,
                    "count": 88
                },
                {
                    "goodID": 5020,
                    "count": 1
                },
                {
                    "goodID": 4021,
                    "count": 10
                },
                {
                    "goodID": 4013,
                    "count": 3
                },
                {
                    "goodID": 4014,
                    "count": 3
                },
                {
                    "goodID": 4015,
                    "count": 3
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰喜迎新年礼包"
        },
        JGRMB84: {
            id: "JGRMB84",
            key: "jiguang.rmb.lb208",
            price: 208,
            goods: [
                {
                    "goodID": 5010,
                    "count": 18888
                },
                {
                    "goodID": 5003,
                    "count": 3888
                },
                {
                    "goodID": 4007,
                    "count": 88
                },
                {
                    "goodID": 4022,
                    "count": 88
                },
                {
                    "goodID": 4016,
                    "count": 88
                },
                {
                    "goodID": 4018,
                    "count": 1
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰破五祈福礼包"
        },
        JGRMB85: {
            id: "JGRMB85",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [
                {
                    "goodID": 5012,
                    "count": 10888
                },
                {
                    "goodID": 5020,
                    "count": 3
                },
                {
                    "goodID": 5019,
                    "count": 88
                },
                {
                    "goodID": 5015,
                    "count": 50
                },
                {
                    "goodID": 5014,
                    "count": 50
                },
                {
                    "goodID": 5013,
                    "count": 50
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰破五升运礼包"
        },
        JGRMB86: {
            id: "JGRMB86",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [
                {
                    "goodID": 5021,
                    "count": 5
                },
                {
                    "goodID": 4030,
                    "count": 1
                },
                {
                    "goodID": 4017,
                    "count": 50
                },
                {
                    "goodID": 4001,
                    "count": 218
                },
                {
                    "goodID": 4004,
                    "count": 218
                },
                {
                    "goodID": 4005,
                    "count": 218
                },
                {
                    "goodID": 4006,
                    "count": 218
                },
                {
                    "goodID": 5033,
                    "count": 100
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰开泰鞭炮礼包"
        },
        JGRMB87: {
            id: "JGRMB87",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [
                {
                    "goodID": 5020,
                    "count": 3
                },
                {
                    "goodID": 4007,
                    "count": 50
                },
                {
                    "goodID": 4016,
                    "count": 88
                },
                {
                    "goodID": 5014,
                    "count": 50
                },
                {
                    "goodID": 5033,
                    "count": 100
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰人庆鞭炮礼包"
        },
        JGRMB88: {
            id: "JGRMB88",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [
                {
                    "goodID": 5012,
                    "count": 5555
                },
                {
                    "goodID": 5001,
                    "count": 8888
                },
                {
                    "goodID": 5020,
                    "count": 2
                },
                {
                    "goodID": 4038,
                    "count": 1
                },
                {
                    "goodID": 5033,
                    "count": 200
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰怡情炮响礼包"
        },
        JGRMB89: {
            id: "JGRMB89",
            key: "jiguang.rmb.lb208",
            price: 208,
            goods: [
                {
                    "goodID": 5001,
                    "count": 28888
                },
                {
                    "goodID": 5003,
                    "count": 3888
                },
                {
                    "goodID": 4007,
                    "count": 88
                },
                {
                    "goodID": 4017,
                    "count": 88
                },
                {
                    "goodID": 4027,
                    "count": 1
                },
                {
                    "goodID": 4018,
                    "count": 1
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰破五消灾礼包"
        },
        JGRMB90: {
            id: "JGRMB90",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [
                {
                    "goodID": 5012,
                    "count": 10888
                },
                {
                    "goodID": 5001,
                    "count": 18888
                },
                {
                    "goodID": 5003,
                    "count": 3888
                },
                {
                    "goodID": 4001,
                    "count": 888
                },
                {
                    "goodID": 4003,
                    "count": 888
                },
                {
                    "goodID": 4004,
                    "count": 888
                },
                {
                    "goodID": 4005,
                    "count": 888
                },
                {
                    "goodID": 4006,
                    "count": 888
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰破五鸿运礼包"
        },
        JGRMB91: {
            id: "JGRMB91",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [
                {
                    "goodID": 4007,
                    "count": 200
                },
                {
                    "goodID": 2509,
                    "count": 1
                },
                {
                    "goodID": 4017,
                    "count": 50
                },
                {
                    "goodID": 4001,
                    "count": 218
                },
                {
                    "goodID": 4004,
                    "count": 218
                },
                {
                    "goodID": 4005,
                    "count": 218
                },
                {
                    "goodID": 4006,
                    "count": 218
                },
                {
                    "goodID": 5033,
                    "count": 100
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰三阳鞭炮礼包"
        },
        JGRMB92: {
            id: "JGRMB92",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [
                {
                    "goodID": 5020,
                    "count": 3
                },
                {
                    "goodID": 4007,
                    "count": 50
                },
                {
                    "goodID": 5002,
                    "count": 2000000
                },
                {
                    "goodID": 5014,
                    "count": 50
                },
                {
                    "goodID": 4016,
                    "count": 88
                },
                {
                    "goodID": 5033,
                    "count": 100
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰人胜鞭炮礼包"
        },
        JGRMB93: {
            id: "JGRMB93",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [
                {
                    "goodID": 5012,
                    "count": 5000
                },
                {
                    "goodID": 4037,
                    "count": 1
                },
                {
                    "goodID": 4001,
                    "count": 888
                },
                {
                    "goodID": 4003,
                    "count": 888
                },
                {
                    "goodID": 4004,
                    "count": 888
                },
                {
                    "goodID": 4005,
                    "count": 888
                },
                {
                    "goodID": 4006,
                    "count": 888
                },
                {
                    "goodID": 5033,
                    "count": 200
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰爱情礼炮礼包"
        },
        JGRMB94_destory: {
            id: "JGRMB94",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [
                {
                    "goodID": 5001,
                    "count": 16888
                },
                {
                    "goodID": 5020,
                    "count": 1
                },
                {
                    "goodID": 5021,
                    "count": 1
                },
                {
                    "goodID": 4017,
                    "count": 88
                },
                {
                    "goodID": 4003,
                    "count": 188
                },
                {
                    "goodID": 4004,
                    "count": 188
                },
                {
                    "goodID": 4005,
                    "count": 188
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰喜迎元宵节礼包"
        },
        JGRMB95: {
            id: "JGRMB95",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [
                {
                    "goodID": 5012,
                    "count": 5888
                },
                {
                    "goodID": 5019,
                    "count": 68
                },
                {
                    "goodID": 5010,
                    "count": 888
                },
                {
                    "goodID": 4029,
                    "count": 1
                },
                {
                    "goodID": 4018,
                    "count": 1
                },
                {
                    "goodID": 4011,
                    "count": 8
                },
                {
                    "goodID": 4012,
                    "count": 8
                },
                {
                    "goodID": 4013,
                    "count": 8
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰喜乐元宵节礼包"
        },
        JGRMB96: {
            id: "JGRMB96",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [
                {
                    "goodID": 5021,
                    "count": 35
                },
                {
                    "goodID": 5020,
                    "count": 3
                },
                {
                    "goodID": 5010,
                    "count": 888
                },
                {
                    "goodID": 5013,
                    "count": 88
                },
                {
                    "goodID": 5014,
                    "count": 88
                },
                {
                    "goodID": 5015,
                    "count": 88
                },
                {
                    "goodID": 4004,
                    "count": 888
                },
                {
                    "goodID": 4006,
                    "count": 888
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰喜庆元宵节礼包"
        },
        JGRMB97: {
            id: "JGRMB97",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [
                {
                    "goodID": 4007,
                    "count": 268
                },
                {
                    "goodID": 2511,
                    "count": 1
                },
                {
                    "goodID": 5021,
                    "count": 1
                },
                {
                    "goodID": 4001,
                    "count": 188
                },
                {
                    "goodID": 4003,
                    "count": 188
                },
                {
                    "goodID": 4004,
                    "count": 188
                },
                {
                    "goodID": 4005,
                    "count": 188
                },
                {
                    "goodID": 4006,
                    "count": 188
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰喜迎元宵礼包"
        },
        JGRMB98: {
            id: "JGRMB98",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [
                {
                    "goodID": 5001,
                    "count": 30888
                },
                {
                    "goodID": 5003,
                    "count": 8888
                },
                {
                    "goodID": 4036,
                    "count": 1
                },
                {
                    "goodID": 4018,
                    "count": 1
                },
                {
                    "goodID": 4016,
                    "count": 188
                },
                {
                    "goodID": 4017,
                    "count": 88
                },
                {
                    "goodID": 4029,
                    "count": 1
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰喜乐元宵礼包"
        },
        JGRMB99: {
            id: "JGRMB99",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [
                {
                    "goodID": 5012,
                    "count": 10888
                },
                {
                    "goodID": 4022,
                    "count": 88
                },
                {
                    "goodID": 5019,
                    "count": 88
                },
                {
                    "goodID": 5013,
                    "count": 88
                },
                {
                    "goodID": 5014,
                    "count": 88
                },
                {
                    "goodID": 5015,
                    "count": 88
                },
                {
                    "goodID": 4030,
                    "count": 1
                },
                {
                    "goodID": 5020,
                    "count": 1
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰喜庆元宵礼包"
        },
        JGRMB112:{
            id:"JGRMB112",
            key:"jiguang.rmb.lb12",
            price:12,
            goods:[
                {
                    "goodID": 5001,
                    "count": 1200
                },
                {
                    "goodID": 5002,
                    "count": 240000
                },
                {
                    "goodID": 4005,
                    "count": 30
                },
                {
                    "goodID": 4006,
                    "count": 30
                },
                {
                    "goodID": 5003,
                    "count": 200
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰12元特价礼包"
        },
        JGRMB130:{
            id:"JGRMB130",
            key:"jiguang.rmb.jb30",
            price:30,
            goods:[
                {
                    "goodID": 5001,
                    "count": 3000
                },
                {
                    "goodID": 5002,
                    "count": 600000
                },
                {
                    "goodID": 3038,
                    "count": 30
                },
                {
                    "goodID": 4023,
                    "count": 10
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰30元特价礼包"
        },
        JGRMB1098:{
            id:"JGRMB1098",
            key:"jiguang.rmb.lb98",
            price:98,
            goods:[
                {
                    "goodID": 4022,
                    "count": 500
                },
                {
                    "goodID": 4028,
                    "count": 1
                },
                {
                    "goodID": 4016,
                    "count": 100
                },
                {
                    "goodID": 4018,
                    "count": 1
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰98元特价礼包"
        },
        JGRMB1288:{
            id:"JGRMB1288",
            key:"jiguang.rmb.lb288",
            price:288,
            goods:[
                {
                    "goodID": 4030,
                    "count": 1
                },
                {
                    "goodID": 4018,
                    "count": 2
                },
                {
                    "goodID": 5023,
                    "count": 300
                },
                {
                    "goodID": 4011,
                    "count": 10
                },
                {
                    "goodID": 4012,
                    "count": 10
                },
                {
                    "goodID": 4013,
                    "count": 10
                },
                {
                    "goodID": 4014,
                    "count": 10
                },
                {
                    "goodID": 4015,
                    "count": 10
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰288元特价礼包"
        },
        JGRMB1648:{
            id:"JGRMB1648",
            key:"jiguang.rmb.lb648",
            price:648,
            goods:[
                {
                    "goodID": 5021,
                    "count": 10
                },
                {
                    "goodID": 5023,
                    "count": 400
                },
                {
                    "goodID": 4039,
                    "count": 1
                },
                {
                    "goodID": 4038,
                    "count": 1
                },
                {
                    "goodID": 4018,
                    "count": 2
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰648元特价礼包"
        },
        JGRMB2098:{
            id:"JGRMB2098",
            key:"jiguang.rmb.lb98",
            price:98,
            goods:[
                {
                    "goodID": 5001,
                    "count": 6000
                },
                {
                    "goodID": 4028,
                    "count": 1
                },
                {
                    "goodID": 4016,
                    "count": 100
                },
                {
                    "goodID": 4018,
                    "count": 1
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰98元特惠礼包"
        },
        JGRMB2288:{
            id:"JGRMB2288",
            key:"jiguang.rmb.lb288",
            price:288,
            goods:[
                {
                    "goodID": 5001,
                    "count": 17800
                },
                {
                    "goodID": 4030,
                    "count": 1
                },
                {
                    "goodID": 4018,
                    "count": 2
                },
                {
                    "goodID": 5023,
                    "count": 300
                },
                {
                    "goodID": 4004,
                    "count": 300
                },
                {
                    "goodID": 4001,
                    "count": 300
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰288元特惠礼包"
        },
        JGRMB2648:{
            id:"JGRMB2648",
            key:"jiguang.rmb.lb648",
            price:648,
            goods:[
                {
                    "goodID": 5001,
                    "count": 40000
                },
                {
                    "goodID": 5023,
                    "count": 400
                },
                {
                    "goodID": 4038,
                    "count": 1
                },
                {
                    "goodID": 4039,
                    "count": 1
                },
                {
                    "goodID": 4018,
                    "count": 2
                },
                {
                    "goodID": 4014,
                    "count": 50
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰648元特惠礼包"
        },
        DF19041001: {
            id: "DF19041001",
            key: "jiguang.rmb.lb1",
            price: 1,
            goods: [{
                    "goodID": 5001,
                    "count": 100
                },
                {
                    "goodID": 5002,
                    "count": 50000
                },
                {
                    "goodID": 5003,
                    "count": 100
                },
                {
                    "goodID": 4001,
                    "count": 10
                }
            ],
            restrictions: {
                type: 1
            },
            text: "战棋三国贰优惠一元礼包"
        },
        DF19041002: {
            id: "DF19041002",
            key: "jiguang.rmb.lb6",
            price: 6,
            goods: [{
                    "goodID": 5001,
                    "count": 600
                },
                {
                    "goodID": 5002,
                    "count": 300000
                },
                {
                    "goodID": 5003,
                    "count": 600
                },
                {
                    "goodID": 4004,
                    "count": 200
                },
                {
                    "goodID": 4006,
                    "count": 50
                }
            ],
            restrictions: {
                type: 1
            },
            text: "战棋三国贰优惠六元礼包"
        },
        DF19041003: {
            id: "DF19041003",
            key: "jiguang.rmb.lb12",
            price: 12,
            goods: [{
                    "goodID": 5001,
                    "count": 1200
                },
                {
                    "goodID": 5002,
                    "count": 1000000
                },
                {
                    "goodID": 5003,
                    "count": 1500
                },
                {
                    "goodID": 4007,
                    "count": 30
                },
                {
                    "goodID": 4004,
                    "count": 100
                }
            ],
            restrictions: {
                type: 1
            },
            text: "战棋三国贰优惠12元礼包"
        },
        DF19041004: {
            id: "DF19041004",
            key: "jiguang.rmb.jb30",
            price: 30,
            goods: [{
                    "goodID": 5001,
                    "count": 1800
                },
                {
                    "goodID": 5002,
                    "count": 2000000
                },
                {
                    "goodID": 4004,
                    "count": 300
                },
                {
                    "goodID": 5003,
                    "count": 3000
                },
                {
                    "goodID": 4006,
                    "count": 100
                }
            ],
            restrictions: {
                type: 1
            },
            text: "战棋三国贰优惠30元礼包"
        },
        DF19041005: {
            id: "DF19041005",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [{
                    "goodID": 5001,
                    "count": 5000
                },
                {
                    "goodID": 5002,
                    "count": 5000000
                },
                {
                    "goodID": 4015,
                    "count": 25
                },
                {
                    "goodID": 5003,
                    "count": 5000
                },
                {
                    "goodID": 5011,
                    "count": 50
                }
            ],
            restrictions: {
                type: 1
            },
            text: "战棋三国贰优惠98元礼包"
        },
        DF19041006: {
            id: "DF19041006",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{
                    "goodID": 5001,
                    "count": 10000
                },
                {
                    "goodID": 5002,
                    "count": 12000000
                },
                {
                    "goodID": 4007,
                    "count": 388
                },
                {
                    "goodID": 5003,
                    "count": 10000
                },
                {
                    "goodID": 5011,
                    "count": 150
                }
            ],
            restrictions: {
                type: 1
            },
            text: "战棋三国贰优惠288元礼包"
        },
        DF19041007: {
            id: "DF19041007",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [{
                    "goodID": 5001,
                    "count": 20000
                },
                {
                    "goodID": 5002,
                    "count": 25000000
                },
                {
                    "goodID": 4007,
                    "count": 588
                },
                {
                    "goodID": 5003,
                    "count": 20000
                },
                {
                    "goodID": 5011,
                    "count": 300
                },
                {
                    "goodID": 4012,
                    "count": 88
                }
            ],
            restrictions: {
                type: 1
            },
            text: "战棋三国贰优惠648元礼包"
        },
        V5011: {
            id: "V5011",
            key: "jiguang.rmb.jb30",
            price: 30,
            goods: [{
                "goodID": 5002,
                "count": 10000000
            }],
            restrictions: { type: 3, num: 5, vip: [{ lv: 5, num: 5 }, { lv: 6, num: 5 }, { lv: 7, num: 5 }, { lv: 8, num: 10 }, { lv: 9, num: 20 }, { lv: 10, num: 0 }, { lv: 11, num: 0 }, { lv: 12, num: 0 }] },
            text: "1000W银币包"
        },
        V5002: {
            id: "V5002",
            key: "jiguang.rmb.lb208",
            price: 208,
            goods: [{
                "goodID": 4017,
                "count": 1000
            }],
            restrictions: { type: 3, num: 2, vip: [{ lv: 5, num: 2 }, { lv: 6, num: 2 }, { lv: 7, num: 2 }, { lv: 8, num: 4 }, { lv: 9, num: 8 }, { lv: 10, num: 0 }, { lv: 11, num: 0 }, { lv: 12, num: 0 }] },
            text: "1000碎片包"
        },
        V5003: {
            id: "V5003",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{
                "goodID": 5001,
                "count": 35600
            }],
            restrictions: { type: 3, num: 1, vip: [{ lv: 5, num: 1 }, { lv: 6, num: 1 }, { lv: 7, num: 1 }, { lv: 8, num: 2 }, { lv: 9, num: 3 }, { lv: 10, num: 3 }, { lv: 11, num: 4 }, { lv: 12, num: 4 }] },
            text: "288金"
        },
        V5004: {
            id: "V5004",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{
                "goodID": 5001,
                "count": 5000
            },
            {
                "goodID": 5002,
                "count": 3000000
            },
            {
                "goodID": 5035,
                "count": 500
            }],
            restrictions: { type: 3, num: 1, vip: [{ lv: 5, num: 2 },{  lv: 6, num: 2 },{ lv: 7, num: 2 }, { lv: 8, num: 3 }, { lv: 9, num: 3 },  { lv: 10, num: 4 }, { lv: 11, num: 4 }, { lv: 12, num: 4 }] },
            text: "丹书铁卷包"
        },
        V5005: {
            id: "V5005",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods: [{
                "goodID": 5012,
                "count": 5000
            },
            {
                "goodID": 5002,
                "count": 5000000
            }],
            restrictions: { type: 3, num: 1, vip: [{ lv: 5, num: 1 },{  lv: 6, num: 1 },{ lv: 7, num: 2 }, { lv: 8, num: 2 }, { lv: 9, num: 3 },  { lv: 10, num: 3 }, { lv: 11, num: 4 }, { lv: 12, num: 4 }] },
            text: "萃铁优惠包"
        },
        V5006: {
            id: "V5006",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods: [{
                "goodID": 5019,
                "count": 100
            },
            {
                "goodID": 5002,
                "count": 3000000
            }],
            restrictions: { type: 3, num: 1, vip: [{ lv: 5, num: 1 },{  lv: 6, num: 1 },{ lv: 7, num: 2 }, { lv: 8, num: 2 }, { lv: 9, num: 3 },  { lv: 10, num: 3 }, { lv: 11, num: 4 }, { lv: 12, num: 4 }] },
            text: "重铸石优惠包"
        },
        V5007: {
            id: "V5007",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [{
                "goodID": 5023,
                "count": 350
            },
            {
                "goodID": 5002,
                "count": 420000
            }],
            restrictions: { type: 3, num: 1, vip: [{ lv: 5, num: 1 },{  lv: 6, num: 1 },{ lv: 7, num: 2 }, { lv: 8, num: 2 }, { lv: 9, num: 3 },  { lv: 10, num: 3 }, { lv: 11, num: 4 }, { lv: 12, num: 4 }] },
            text: "普通积分礼包"
        },
        V5008: {
            id: "V5008",
            key: "jiguang.rmb.lb328",
            price: 328,
            goods: [{
                "goodID": 5023,
                "count": 1100
            },
            {
                "goodID": 5002,
                "count": 1300000
            }],
            restrictions: { type: 3, num: 1, vip: [{ lv: 5, num: 1 },{  lv: 6, num: 1 },{ lv: 7, num: 2 }, { lv: 8, num: 2 }, { lv: 9, num: 3 },  { lv: 10, num: 3 }, { lv: 11, num: 4 }, { lv: 12, num: 4 }] },
            text: "豪华积分礼包"
        },
        V5009: {
            id: "V5009",
            key: "jiguang.rmb.lb208",
            price: 208,
            goods: [{
                "goodID": 5203,
                "count": 66
            },
            {
                "goodID": 5002,
                "count": 3000000
            }],
            restrictions: { type: 3, num: 1, vip: [{ lv: 5, num: 1 },{  lv: 6, num: 1 },{ lv: 7, num: 2 }, { lv: 8, num: 2 }, { lv: 9, num: 3 },  { lv: 10, num: 3 }, { lv: 11, num: 4 }, { lv: 12, num: 4 }] },
            text: "附魔卷轴包"
        },
        V5010: {
            id: "V5010",
            key: "jiguang.rmb.lb208",
            price: 208,
            goods: [{
                "goodID": 5208,
                "count": 66
            },
            {
                "goodID": 5002,
                "count": 3000000
            }],
            restrictions: { type: 3, num: 1, vip: [{ lv: 5, num: 1 },{  lv: 6, num: 1 },{ lv: 7, num: 2 }, { lv: 8, num: 2 }, { lv: 9, num: 3 },  { lv: 10, num: 3 }, { lv: 11, num: 4 }, { lv: 12, num: 4 }] },
            text: "高级珠宝包"
        },
        V6001: {
            id: "V6001",
            key: "jiguang.rmb.lb208",
            price: 208,
            goods: [{
                "goodID": 5003,
                "count": 10000
            }],
            restrictions: { type: 3, num: 1, vip: [{ lv: 5, num: 1 },{ lv: 6, num: 1 }, { lv: 7, num: 1 }, { lv: 8, num: 2 }, { lv: 9, num: 4 }, { lv: 10, num: 0 }, { lv: 11, num: 0 }, { lv: 12, num: 0 }] },
            text: "1W功绩包"
        },
        V6002: {
            id: "V6002",
            key: "jiguang.rmb.jb548",
            price: 548,
            goods: [{
                "goodID": 5001,
                "count": 68000
            }],
            restrictions: { type: 3, num: 1, vip: [{ lv: 5, num: 1 },{ lv: 6, num: 1 }, { lv: 7, num: 1 }, { lv: 8, num: 2 }, { lv: 9, num: 3 }, { lv: 10, num: 3 }, { lv: 11, num: 4 }, { lv: 12, num: 4 }] },
            text: "548金"
        },
        V6003: {
            id: "V6003",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{
                "goodID": 5001,
                "count": 5000
            },
            {
                "goodID": 5002,
                "count": 3000000
            },
            {
                "goodID": 4007,
                "count": 500
            }],
            restrictions: { type: 3, num: 1, vip: [{ lv: 6, num: 1 }, { lv: 7, num: 1 }, { lv: 8, num: 2 }, { lv: 9, num: 2 }, { lv: 10, num: 3 }, { lv: 11, num: 4 }, { lv: 12, num: 4 }] },
            text: "公文包"
        },
        V6004: {
            id: "V6004",
            key: "jiguang.rmb.lb208",
            price: 208,
            goods: [{"goodID": 5134,"count": 3}],
            restrictions: { type: 3, num: 1, vip: [{ lv: 6, num: 1 }, { lv: 7, num: 2}, { lv: 8, num: 3 }, { lv: 9, num: 4 }, { lv: 10, num: 5}, { lv: 11, num: 5 }, { lv: 12, num: 5}] },
            text: "巅峰升阶包1"
        },
        V7001: {
            id: "V7001",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [{
                "goodID": 5001,
                "count": 80000
            }],
            restrictions: { type: 3, num: 1, vip: [{ lv: 7, num: 1 }, { lv: 8, num: 1 }, { lv: 9, num: 2 }, { lv: 10, num: 3 }, { lv: 11, num: 4 }, { lv: 12, num: 4 }] },
            text: "648金"
        },
        V7002: {
            id: "V7002",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [{
                "goodID": 4001,
                "count": 1000
            },
            {
                "goodID": 4003,
                "count": 1000
            },
            {
                "goodID": 4004,
                "count": 1000
            },
            {
                "goodID": 4005,
                "count": 1000
            },
            {
                "goodID": 4006,
                "count": 1000
            }],
            restrictions: { type: 3, num: 1, vip: [{ lv: 7, num: 1 }, { lv: 8, num: 2 }, { lv: 9, num: 4 }, { lv: 10, num: 0 }, { lv: 11, num: 0 }, { lv: 12, num: 0 }] },
            text: "材料包"
        },
        V7003: {
            id: "V7003",
            key: "jiguang.rmb.jb548",
            price: 548,
            goods: [{"goodID": 5134,"count":12 }],
            restrictions: { type: 3, num: 1, vip: [{ lv: 7, num: 1 }, { lv: 8, num: 2 }, { lv: 9, num: 3 }, { lv: 10, num: 4 }, { lv: 11, num: 5 }, { lv: 12, num: 7 }] },
            text: "巅峰升阶包2"
        },
        JGRMB190625_1: {
            id: "JGRMB190625_1",
            key: "jiguang.rmb.lb6",
            price: 6,
            goods: [
                {"goodID":4001,"count":200},
                {"goodID":4003,"count":200},
                {"goodID":4004,"count":200},
                {"goodID":4005,"count":200},
                {"goodID":4006,"count":200}
            ],
            restrictions: { type: 4 },
            text: "升级材料包"
        },
        JGRMB190625_2: {
            id: "JGRMB190625_2",
            key: "jiguang.rmb.lb6",
            price: 6,
            goods: [
                {"goodID":4118,"count":1},
                {"goodID":5003,"count":2000}
            ],
            restrictions: { type: 4 },
            text: "强力武将包"
        },
        JGRMB190625_3: {
            id: "JGRMB190625_3",
            key: "jiguang.rmb.lb6",
            price: 6,
            goods: [
                {"goodID":1156,"count":1}
            ],
            restrictions: { type: 4 },
            text: "强力武器包"
        },
        JGRMB190625_4: {
            id: "JGRMB190625_4",
            key: "jiguang.rmb.lb6",
            price: 6,
            goods: [
                {"goodID":5001,"count":2000}
            ],
            restrictions: { type: 4 },
            text: "超值金币包"
        },
        JGRMB190625_5: {
            id: "JGRMB190625_5",
            key: "jiguang.rmb.lb6",
            price: 6,
            goods: [
                {"goodID":2257,"count":1}
            ],
            restrictions: { type: 4 },
            text: "强力辅助品包"
        },
        JGRMB190625_6: {
            id: "JGRMB190625_6",
            key: "jiguang.rmb.lb6",
            price: 6,
            goods: [
                {"goodID":5002,"count":15000000}
            ],
            restrictions: { type: 4 },
            text: "超值银币包"
        },
        JGRMB190625_7: {
            id: "JGRMB190625_7",
            key: "jiguang.rmb.lb6",
            price: 6,
            goods: [
                {"goodID":5013,"count":300},
                {"goodID":5014,"count":100},
                {"goodID":5012,"count":1000}
            ],
            restrictions: { type: 4 },
            text: "强化装备包"
        },
        JGRMB190625_8: {
            id: "JGRMB190625_8",
            key: "jiguang.rmb.lb1",
            price: 1,
            goods: [
                {
                    "goodID": 4118,
                    "count": 1
                }
            ],
            restrictions: { type: 1 },
            text: "1块钱测试"
        },
        JGRMB131: {
            id: "JGRMB131",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [
                {
                    "goodID": 5001,
                    "count": 15000
                },                
                {   
                    "goodID": 4039,
                    "count": 2
                },                
                {   
                    "goodID": 4007,
                    "count": 300
                },                
                {   
                    "goodID": 5024,
                    "count": 5
                }
            ],
            restrictions: { type: 1 },
            text: "战棋三国贰圣诞礼包"
        },
        JGRMB132: {
            id: "JGRMB132",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [
                {
                    "goodID": 5121,
                    "count": 60
                },
                {
                    "goodID": 5002,
                    "count": 10000000
                }
            ],
            restrictions: { type: 1 },
            text: "囚牛鞭炮礼包"
        },
        JGRMB133: {
            id: "JGRMB133",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [
                {
                    "goodID": 5122,
                    "count": 60
                },
                {
                    "goodID": 5002,
                    "count": 10000000
                }
            ],
            restrictions: { type: 1 },
            text: "狴犴鞭炮礼包"
        },
        JGRMB134: {
            id: "JGRMB134",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [
                {
                    "goodID": 5123,
                    "count": 60
                },
                {
                    "goodID": 5002,
                    "count": 10000000
                }
            ],
            restrictions: { type: 1 },
            text: "狻猊鞭炮礼包"
        },
        JGRMB135: {
            id: "JGRMB135",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [
                {
                    "goodID": 5124,
                    "count": 60
                },
                {
                    "goodID": 5002,
                    "count": 10000000
                }
            ],
            restrictions: { type: 1 },
            text: "霸下鞭炮礼包"
        },
        JGRMB136: {
            id: "JGRMB136",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [
                {
                    "goodID": 4127,
                    "count": 1
                }
            ],
            restrictions: { type: 1 },
            text: "止啼文远礼包"
        },
        JGRMB137: {
            id: "JGRMB137",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [
                {
                    "goodID": 5001,
                    "count": 18888
                },
                {
                    "goodID":5002,
                    "count": 1880000
                }
            ],
            restrictions: { type: 1 },
            text: "金银币礼包"
        },
        JGRMB138: {
            id: "JGRMB138",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [
                {
                    "goodID": 5019,
                    "count": 300
                },
                {
                    "goodID":5002,
                    "count": 2880000
                }
            ],
            restrictions: { type: 1 },
            text: "银币重铸石礼包"
        },
        JGRMB139: {
            id: "JGRMB139",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [
                {
                    "goodID": 5010,
                    "count": 40000
                }
            ],
            restrictions: { type: 1 },
            text: "巅峰币礼包"
        },
        JGRMB140: {
            id: "JGRMB140",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods: [
                {
                    "goodID": 5002,
                    "count": 5000000
                },
                {
                    "goodID": 6077,
                    "count": 1
                }
            ],
            restrictions: { type: 1 },
            text: "紫陌扇礼包"
        },
        JGRMB141: {
            id: "JGRMB141",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods: [
                {
                    "goodID": 5002,
                    "count": 5000000
                },
                {
                    "goodID": 6056,
                    "count": 1
                }
            ],
            restrictions: { type: 1 },
            text: "鬼之罗刹礼包"
        },
        JGRMB142: {
            id: "JGRMB142",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods: [
                {
                    "goodID": 5002,
                    "count": 5000000
                },
                {
                    "goodID": 6046,
                    "count": 1
                }
            ],
            restrictions: { type: 1 },
            text: "烟罗衫礼包"
        },
        JGRMB143: {
            id: "JGRMB143",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods: [
                {
                    "goodID": 5002,
                    "count": 5000000
                },
                {
                    "goodID": 6029,
                    "count": 1
                }
            ],
            restrictions: { type: 1 },
            text: "天空弓礼包"
        },
        JGRMB144: {
            id: "JGRMB144",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [
                {
                    "goodID": 5001,
                    "count": 15000
                },
                {
                    "goodID": 5023,
                    "count": 200
                }
            ],
            restrictions: { type: 1 },
            text: "金币积分礼包"
        },
        JGRMB145: {
            id: "JGRMB145",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods: [
                {
                    "goodID": 4007,
                    "count": 360
                },
                {
                    "goodID": 4042,
                    "count": 36
                },
                {
                    "goodID": 5003,
                    "count": 5000
                }
            ],
            restrictions: { type: 1 },
            text: "公文功勋礼包"
        },
        JGRMB146: {
            id: "JGRMB146",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods: [
                {
                    "goodID": 5002,
                    "count": 12000000
                },
                {
                    "goodID": 5020,
                    "count": 6
                }
            ],
            restrictions: { type: 1 },
            text: "神贴银币礼包"
        },
        JGRMB147: {
            id: "JGRMB147",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [
                {
                    "goodID": 5002,
                    "count": 12000000
                },
                {
                    "goodID": 5012,
                    "count": 3600
                }
            ],
            restrictions: { type: 1 },
            text: "萃铁石银币礼包"
        },
        JGRMB148: {
            id: "JGRMB148",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods: [
                {
                    "goodID": 5002,
                    "count": 15000000
                },
                {
                    "goodID": 5019,
                    "count": 150
                }
            ],
            restrictions: { type: 1 },
            text: "重铸石银币礼包"
        },
        JGRMB149: {
            id: "JGRMB149",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods:[{"goodID":5001,"count":15000},{"goodID":4007,"count":80}],
            restrictions: { type: 1 },
            text: "金币公文礼包"
        },
        JGRMB150: {
            id: "JGRMB150",
            key: "jiguang.rmb.lb208",
            price: 208,
            goods:[{"goodID":5001,"count":15000},{"goodID":5020,"count":8}],
            restrictions: { type: 1 },
            text: "金币神铁贴礼包"
        },
        JGRMB151: {
            id: "JGRMB151",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods:[{"goodID":5001,"count":15000},{"goodID":5019,"count":50}],
            restrictions: { type: 1 },
            text: "金币重铸石礼包"
        },
        JGRMB152: {
            id: "JGRMB152",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods:[{"goodID":5001,"count":15000},{"goodID":5023,"count":260}],
            restrictions: { type: 1 },
            text: "金币积分礼包2"
        },
        JGRMB153: {
            id: "JGRMB153",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods:[{"goodID":5001,"count":15000},{"goodID":5012,"count":1500}],
            restrictions: { type: 1 },
            text: "金币萃铁石礼包"
        },
        JGRMB154: {
            id: "JGRMB154",
            key: "jiguang.rmb.lb208",
            price: 208,
            goods:[],
            restrictions: { type: 1 },
            text: "悬赏令礼包"
        },
        JGRMB155: {
            id: "JGRMB155",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods:[{"goodID":5002,"count":5000000},{"goodID":6081,"count":1}],
            restrictions: { type: 1 },
            text: "张角时装礼包"
        },
        JGRMB156: {
            id: "JGRMB156",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods:[{"goodID":5002,"count":5000000},{"goodID":6076,"count":1}],
            restrictions: { type: 1 },
            text: "庞统时装礼包"
        },
        JGRMB157: {
            id: "JGRMB157",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods:[{"goodID":5002,"count":5000000},{"goodID":6041,"count":1}],
            restrictions: { type: 1 },
            text: "邓艾时装礼包"
        },
        JGRMB158: {
            id: "JGRMB158",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods:[{"goodID":5002,"count":5000000},{"goodID":6079,"count":1}],
            restrictions: { type: 1 },
            text: "孙权时装礼包"
        },
        JGRMB159: {
            id: "JGRMB159",
            key: "jiguang.rmb.lb12",
            price: 12,
            goods: [{ "goodID": 5020, "count": 1 }, { "goodID": 5012, "count": 1500 },{"goodID":5002,"count":2000000}],
            restrictions: { type: 4 },
            text: "老区12元礼包"
        },
        JGRMB160: {
            id: "JGRMB160",
            key: "jiguang.rmb.lb6",
            price: 6,
            goods: [{ "goodID": 4004, "count": 50 }, { "goodID": 4007, "count": 20 }, {"goodID":5003,"count":500}],
            restrictions: { type: 4 },
            text: "新6元礼包"
        },
        JGRMB161: {
            id: "JGRMB161",
            key: "jiguang.rmb.lb12",
            price: 12,
            goods: [{ "goodID": 4004, "count": 60 }, { "goodID": 4007, "count": 50 }, {"goodID":5002,"count":2000000}],
            restrictions: { type: 4 },
            text: "新区12元礼包"
        },
        JGRMB162: {
            id: "JGRMB162",
            key: "jiguang.rmb.lb208",
            price: 208,
            goods: [{ "goodID": 5001, "count": 15000 }, { "goodID": 5011, "count": 255 }],
            restrictions: { type: 4 },
            text: "阵法书礼包"
        },
        JGRMB163: {
            id: "JGRMB163",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{ "goodID": 6069, "count": 1 }],
            restrictions: { type: 4 },
            text: "超稀有时装礼包"
        },
        JGRMB164: {
            id: "JGRMB164",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [
                {
                    "goodID": 5125,
                    "count": 10
                }
            ],
            restrictions: { type: 1 },
            text: "黑面翼徳礼包"
        },
        JGRMB165: {
            id: "JGRMB165",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{"goodID": 4128,"count": 1},{"goodID": 5003,"count": 15000},{"goodID": 4007,"count": 400},{"goodID": 4001,"count": 1700},
                    {"goodID": 4003,"count": 1200},{"goodID": 4004,"count": 4800},{"goodID": 4005,"count": 900},{"goodID": 4006,"count": 1000}],
            restrictions: { type: 1 },
            text: "黑面翼徳新礼包"
        },
        JGRMB166: {
            id: "JGRMB166",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [
                {
                    "goodID": 6073,
                    "count": 1
                }
            ],
            restrictions: { type: 1 },
            text: "啸天虎礼包"
        },
        JGRMB167: {
            id: "JGRMB167",
            key: "jiguang.rmb.lb12",
            price: 12,
            goods: [{ "goodID": 5128, "count": 3 }, {"goodID":5002,"count":1000000}],
            restrictions: { type: 4 },
            text: "12元游戏礼包"
        },
        JGRMB168: {
            id: "JGRMB168",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [{ "goodID": 5128, "count": 39 },  {"goodID":5002,"count":1000000}],
            restrictions: { type: 4 },
            text: "98元游戏礼包"
        },
        JGRMB169: {
            id: "JGRMB169",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{ "goodID": 5128, "count": 80 },  {"goodID":5002,"count":1000000}],
            restrictions: { type: 4 },
            text: "288元游戏礼包"
        },
        JGRMB170: {
            id: "JGRMB170",
            key: "jiguang.rmb.jb548",
            price: 548,
            goods: [{ "goodID": 5128, "count": 160 },  {"goodID":5002,"count":1000000}],
            restrictions: { type: 4 },
            text: "548元游戏币礼包"
        },
        JGRMB171: {
            id: "JGRMB171",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [{ "goodID": 5128, "count": 208 },  {"goodID":5002,"count":1000000}],
            restrictions: { type: 4 },
            text: "648元游戏币礼包"
        },
        JGRMB172: {
            id: "JGRMB172",
            key: "jiguang.rmb.lb6",
            price: 6,
            goods: [{ "goodID": 4022, "count": 100 }],
            restrictions: { type: 4 },
            text: "6元抓宝卷礼包"
        },
        JGRMB173: {
            id: "JGRMB173",
            key: "jiguang.rmb.lb12",
            price: 12,
            goods: [{ "goodID": 1156, "count": 1 }, { "goodID": 2257, "count": 1 }],
            restrictions: { type: 4 },
            text: "12宝物礼包"
        },
        JGRMB174: {
            id: "JGRMB174",
            key: "jiguang.rmb.jb30",
            price: 30,
            goods: [{ "goodID": 6001, "count": 1 }],
            restrictions: { type: 4 },
            text: "30元赵云时装礼包"
        },
        JGRMB175: {
            id: "JGRMB175",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [{ "goodID": 4001, "count": 1000 }, { "goodID": 4003, "count": 1000 }, { "goodID": 4004, "count": 1000 }, { "goodID": 4005, "count": 1000 }, { "goodID": 4006, "count": 1000 }],
            restrictions: { type: 4 },
            text: "98元礼包"
        },
        JGRMB176: {
            id: "JGRMB176",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{ "goodID": 5002, "count": 2000000 }, { "goodID": 5023, "count": 1500 }],
            restrictions: { type: 4 },
            text: "288元礼包"
        },
        JGRMB177: {
            id: "JGRMB177",
            key: "jiguang.rmb.jb548",
            price: 548,
            goods: [{ "goodID": 5021, "count": 50 }, { "goodID": 5232, "count": 130 }],
            restrictions: { type: 4 },
            text: "548双水镜令礼包"
        },
        JGRMB178: {
            id: "JGRMB178",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [{ "goodID": 4109, "count": 1 }, { "goodID": 1163, "count": 1 }, { "goodID": 2057, "count": 1 }, { "goodID": 2267, "count": 1 }, { "goodID": 6009, "count": 1 }, { "goodID": 6044, "count": 1 }],
            restrictions: { type: 4 },
            text: "648吕布超值时装礼包"
        },
        JGRMB179: {
            id: "JGRMB179",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{ "goodID": 6110, "count": 1 }],
            restrictions: { type: 4 },
            text: "凤翅金盔礼包"
        },
        JGRMB180: {
            id: "JGRMB180",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{ "goodID": 6111, "count": 1 }],
            restrictions: { type: 4 },
            text: "凤凰翎羽礼包"
        },
        JGRMB181: {
            id: "JGRMB181",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{ "goodID": 5133, "count": 5000 }],
            restrictions: { type: 4 },
            text: "端午矿稿礼包"
        },
        JGRMB182: {
            id: "JGRMB182",
            key: "jiguang.rmb.lb6",
            price: 6,
            goods: [{ "goodID": 5133, "count": 200 }],
            restrictions: { type: 4 },
            text: "端午6元礼包"
        },
        JGRMB183: {
            id: "JGRMB183",
            key: "jiguang.rmb.lb12",
            price: 12,
            goods: [{ "goodID": 5132, "count": 3 }],
            restrictions: { type: 4 },
            text: "端午12元礼包"
        },
        JGRMB184: {
            id: "JGRMB184",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [{ "goodID": 5132, "count": 39 }],
            restrictions: { type: 4 },
            text: "端午98元礼包"
        },
        JGRMB185: {
            id: "JGRMB185",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{ "goodID": 5132, "count": 80 }],
            restrictions: { type: 4 },
            text: "端午288元礼包"
        },
        JGRMB186: {
            id: "JGRMB186",
            key: "jiguang.rmb.jb548",
            price: 548,
            goods: [{ "goodID": 5132, "count": 150 }],
            restrictions: { type: 4 },
            text: "端午548元游戏礼包"
        },
        JGRMB187: {
            id: "JGRMB187",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [{ "goodID": 5132, "count": 218 }],
            restrictions: { type: 4 },
            text: "端午648元游戏礼包"
        },
        JGRMB188: {
            id: "JGRMB188",
            key: "jiguang.rmb.lb6",
            price: 6,
            goods: [{ "goodID": 5023, "count": 50 }, {"goodID": 5022, "count": 1}],
            restrictions: { type: 4 },
            text: "6元积分礼包"
        },
        JGRMB189: {
            id: "JGRMB189",
            key: "jiguang.rmb.lb12",
            price: 12,
            goods: [{ "goodID": 5022, "count": 3 }],
            restrictions: { type: 4 },
            text: "12魔石特惠礼包"
        },
        JGRMB190: {
            id: "JGRMB190",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [{ "goodID": 5022, "count": 39 }],
            restrictions: { type: 4 },
            text: "98魔石特惠元礼包"
        },
        JGRMB191: {
            id: "JGRMB191",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{ "goodID": 5022, "count": 80 }],
            restrictions: { type: 4 },
            text: "288元魔石特惠礼包"
        },
        JGRMB192: {
            id: "JGRMB192",
            key: "jiguang.rmb.jb548",
            price: 548,
            goods: [{ "goodID": 5022, "count": 150 }],
            restrictions: { type: 4 },
            text: "548元魔石特惠游戏礼包"
        },
        JGRMB193: {
            id: "JGRMB193",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [{ "goodID": 5022, "count": 218 }],
            restrictions: { type: 4 },
            text: "648元魔石特惠游戏礼包"
        },
        JGRMB194: {
            id: "JGRMB194",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods: [
                {
                    "goodID": 5002,
                    "count": 5000000
                },
                {
                    "goodID": 6060,
                    "count": 1
                }
            ],
            restrictions: { type: 4 },
            text: "兀突骨时装礼包"
        },
        JGRMB195: {
            id: "JGRMB195",
            key: "jiguang.rmb.lb6",
            price: 6,
            goods: [{ "goodID": 5133, "count": 200 }],
            restrictions: { type: 4 },
            text: "6元矿镐礼包"
        },
        JGRMB196: {
            id: "JGRMB196",
            key: "jiguang.rmb.lb12",
            price: 12,
            goods: [{ "goodID": 5103, "count": 3 }],
            restrictions: { type: 4 },
            text: "12元快字特惠礼包"
        },
        JGRMB197: {
            id: "JGRMB197",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [{ "goodID": 5103, "count": 40 }],
            restrictions: { type: 4 },
            text: "98快特惠元礼包"
        },
        JGRMB198: {
            id: "JGRMB198",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{ "goodID": 5103, "count": 80 }],
            restrictions: { type: 4 },
            text: "288元快字特惠礼包"
        },
        JGRMB199: {
            id: "JGRMB199",
            key: "jiguang.rmb.jb548",
            price: 548,
            goods: [{ "goodID": 5103, "count": 150 }],
            restrictions: { type: 4 },
            text: "548元快字特惠游戏礼包"
        },
        JGRMB200: {
            id: "JGRMB200",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [{ "goodID": 5103, "count": 218 }],
            restrictions: { type: 4 },
            text: "648元快字特惠游戏礼包"
        },
        JGRMB201: {
            id: "JGRMB201",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{ "goodID": 6119, "count": 1 }],
            restrictions: { type: 4 },
            text: "马云禄时装礼包"
        },
        JGRMB202: {
            id: "JGRMB202",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{ "goodID": 6128, "count": 1 }],
            restrictions: { type: 4 },
            text: "驭水灵杖时装礼包"
        },
        JGRMB203: {
            id: "JGRMB203",
            key: "jiguang.rmb.lb6",
            price: 6,
            goods: [{ "goodID": 4001, "count": 500 },{ "goodID": 4003, "count": 500 },{ "goodID": 4004, "count": 500 },{ "goodID": 4005, "count": 500 },{ "goodID": 4006, "count": 500 }],
            restrictions: { type: 4 },
            text: "6元养成礼包"
        },
        JGRMB204: {
            id: "JGRMB204",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{ "goodID": 6123, "count": 1 }],
            restrictions: { type: 4 },
            text: "蛮族战斧时装礼包"
        },
        JGRMB205: {
            id: "JGRMB205",
            key: "jiguang.rmb.jb30",
            price: 30,
            goods: [{ "goodID": 5133, "count": 300 }],
            restrictions: { type: 4 },
            text: "30元矿稿礼包1"
        },
        JGRMB206: {
            id: "JGRMB206",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [{ "goodID": 5133, "count": 1200 }],
            restrictions: { type: 4 },
            text: "98矿镐特惠元礼包"
        },
        JGRMB207: {
            id: "JGRMB207",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods: [{ "goodID": 5133, "count": 3500 }],
            restrictions: { type: 4 },
            text: "128矿稿礼包2"
        },
        JGRMB208: {
            id: "JGRMB208",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{ "goodID": 6125, "count": 1 }],
            restrictions: { type: 4 },
            text: "288元于禁时装特惠礼包"
        },
        JGRMB209: {
            id: "JGRMB209",
            key: "jiguang.rmb.jb30",
            price: 30,
            goods: [{ "goodID": 5023, "count": 60 }],
            restrictions: { type: 4 },
            text: "30元积分礼包"
        },
        JGRMB210: {
            id: "JGRMB210",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods: [{ "goodID": 5023, "count": 250 }],
            restrictions: { type: 4 },
            text: "128积分礼包"
        },
        JGRMB211: {
            id: "JGRMB211",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods: [{ "goodID": 5232, "count": 30 }],
            restrictions: { type: 4 },
            text: "128稀有水镜令礼包"
        },
        JGRMB212: {
            id: "JGRMB212",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{ "goodID": 5232, "count": 80 }],
            restrictions: { type: 4 },
            text: "288元稀有水镜令礼包"
        },
        JGRMB213: {
            id: "JGRMB213",
            key: "jiguang.rmb.jb548",
            price: 548,
            goods: [{ "goodID": 5232, "count": 130 }],
            restrictions: { type: 4 },
            text: "548元稀有水镜令礼包"
        },
        JGRMB214: {
            id: "JGRMB214",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [{ "goodID": 5232, "count": 170 }],
            restrictions: { type: 4 },
            text: "648元稀有水镜令礼包"
        },
        JGRMB215: {
            id: "JGRMB215",
            key: "jiguang.rmb.lb12",
            price: 12,
            goods: [{ "goodID": 5023, "count": 25 }, { "goodID": 5012, "count": 1500 },{"goodID":5002,"count":2000000}],
            restrictions: { type: 4 },
            text: "新12元礼包"
        },
        JGRMB216: {
            id: "JGRMB216",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods: [{ "goodID": 6075, "count": 1 }],
            restrictions: { type: 4 },
            text: "128庞德礼包"
        },
        JGRMB217: {
            id: "JGRMB217",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{ "goodID": 6049, "count": 1 }],
            restrictions: { type: 4 },
            text: "288典韦时装礼包1"
        },
        JGRMB218: {
            id: "JGRMB218",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{ "goodID": 6065, "count": 1 },{ "goodID": 6039, "count": 1 }],
            restrictions: { type: 4 },
            text: "288周瑜小乔时装礼包"
        },
        JGRMB219: {
            id: "JGRMB219",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods: [{ "goodID": 6010, "count": 1 },{ "goodID": 6009, "count": 1 }],
            restrictions: { type: 4 },
            text: "128貂蝉吕布时装礼包"
        },
        JGRMB220: {
            id: "JGRMB220",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods: [{ "goodID": 6042, "count": 1 },{ "goodID": 6029, "count": 1 }],
            restrictions: { type: 4 },
            text: "128刘备孙尚香时装礼包"
        },
        JGRMB221: {
            id: "JGRMB221",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [{ "goodID": 5234, "count": 80 }],
            restrictions: { type: 4 },
            text: "648元礼包"
        },
        JGRMB222: {
            id: "JGRMB222",
            key: "jiguang.rmb.lb12",
            price: 12,
            goods: [{ "goodID": 4129, "count": 1 }, { "goodID": 1320, "count": 1 }],
            restrictions: { type: 4 },
            text: "12郭嘉时装礼包"
        },
        JGRMB223: {
            id: "JGRMB223",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [{ "goodID": 4130, "count": 1 },{ "goodID": 1158, "count": 1 }],
            restrictions: { type: 4 },
            text: "98元马超时装礼包"
        },
        JGRMB224: {
            id: "JGRMB224",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods: [{ "goodID": 4109, "count": 1 },{ "goodID": 1154, "count": 1 },{ "goodID": 6009, "count": 1 }],
            restrictions: { type: 4 },
            text: "128吕布时装礼包"
        },
        JGRMB225: {
            id: "JGRMB225",
            key: "jiguang.rmb.lb6",
            price: 6,
            goods: [{"goodID":4022,"count":50}],
            restrictions: { type: 4 },
            text: "宝箱卷礼包"
        },
        JGRMB226: {
            id: "JGRMB226",
            key: "jiguang.rmb.jb30",
            price: 30,
            goods: [{ "goodID": 4001, "count": 300 },{ "goodID": 4003, "count": 300 },{ "goodID": 4004, "count": 300 },{ "goodID": 4005, "count": 300 },{ "goodID": 4006, "count": 300 }],
            restrictions: { type: 4 },
            text: "30元武将升阶礼包"
        },
        JGRMB227: {
            id: "JGRMB227",
            key: "jiguang.rmb.jb30",
            price: 30,
            goods: [{ "goodID": 5002, "count": 1000000 },{ "goodID": 5023, "count": 108 }],
            restrictions: { type: 4 },
            text: "30元积分礼包"
        },
        JGRMB228: {
            id: "JGRMB228",
            key: "jiguang.rmb.jb30",
            price: 30,
            goods: [{ "goodID": 5001, "count": 5000 }],
            restrictions: { type: 4 },
            text: "30元金币礼包"
        },
        JGRMB229: {
            id: "JGRMB229",
            key: "jiguang.rmb.jb30",
            price: 30,
            goods: [{ "goodID": 5012, "count": 5000 },{ "goodID": 5013, "count": 500 },{ "goodID": 5014, "count": 150 }],
            restrictions: { type: 4 },
            text: "30元强化礼包"
        },
        JGRMB230: {
            id: "JGRMB230",
            key: "jiguang.rmb.jb30",
            price: 30,
            goods: [{ "goodID": 4115, "count": 1 },{ "goodID": 4004, "count": 200 },{ "goodID": 4001, "count": 200 }],
            restrictions: { type: 4 },
            text: "30元黄忠武将礼包"
        },
        JGRMB231: {
            id: "JGRMB231",
            key: "jiguang.rmb.jb30",
            price: 30,
            goods: [{ "goodID": 4131, "count": 1 },{ "goodID": 4004, "count": 200 },{ "goodID": 4001, "count": 200 }],
            restrictions: { type: 4 },
            text: "30元钟会武将礼包"
        },
        JGRMB232: {
            id: "JGRMB232",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [{ "goodID": 4103, "count": 1 },{ "goodID": 1051, "count": 1 }],
            restrictions: { type: 4 },
            text: "98元郝昭时装礼包"
        },
        JGRMB233: {
            id: "JGRMB233",
            key: "jiguang.rmb.jb30",
            price: 30,
            goods: [{ "goodID": 5133, "count": 300 }],
            restrictions: { type: 4 },
            text: "30元矿稿礼包2"
        },
        JGRMB234: {
            id: "JGRMB234",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [{ "goodID": 5133, "count": 1200 }],
            restrictions: { type: 4 },
            text: "98元矿镐礼包"
        },
        JGRMB235: {
            id: "JGRMB235",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods: [{ "goodID": 5133, "count": 3500 }],
            restrictions: { type: 4 },
            text: "128矿稿礼包1"
        },
        JGRMB236: {
            id: "JGRMB236",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{ "goodID": 6048, "count": 1 },{ "goodID": 4116, "count": 1 }],
            restrictions: { type: 4 },
            text: "288姜维时装礼包"
        },
        JGRMB237: {
                id: "JGRMB237",
                key: "jiguang.rmb.lb288",
                price: 288,
                goods: [{ "goodID": 6113, "count": 1 }],
                restrictions: { type: 4 },
                text: "288邓艾时装礼包"
        },
        JGRMB238: {
                id: "JGRMB238",
                key: "jiguang.rmb.lb288",
                price: 288,
                goods: [{ "goodID": 6092, "count": 1 }],
                restrictions: { type: 4 },
                text: "288司马懿时装礼包"
        },
        JGRMB239: {
            id: "JGRMB239",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods: [{ "goodID": 4132, "count": 1 },{ "goodID": 6060, "count": 1 }],
            restrictions: { type: 4 },
            text: "128突兀骨礼包"
        },
        JGRMB240: {
            id: "JGRMB240",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{ "goodID": 4105, "count": 1 },{ "goodID": 6128, "count": 1 }],
            restrictions: { type: 4 },
            text: "288陈群时装礼包"
        },
        JGRMB241: {
                id: "JGRMB241",
                key: "jiguang.rmb.lb288",
                price: 288,
                goods: [{ "goodID": 6044, "count": 1 }],
                restrictions: { type: 4 },
                text: "288吕布时装礼包"
        },
        JGRMB242: {
                id: "JGRMB242",
                key: "jiguang.rmb.lb288",
                price: 288,
                goods: [{ "goodID": 6049, "count": 1 }],
                restrictions: { type: 4 },
                text: "288典韦时装礼包2"
        },
        JGRMB243: {
                id: "JGRMB243",
                key: "jiguang.rmb.lb288",
                price: 288,
                goods: [{ "goodID": 6034, "count": 1 }],
                restrictions: { type: 4 },
                text: "288张飞时装礼包"
        },
        JGRMB244: {
                id: "JGRMB244",
                key: "jiguang.rmb.lb288",
                price: 288,
                goods: [{ "goodID": 6065, "count": 1 }],
                restrictions: { type: 4 },
                text: "288周瑜时装礼包"
        },
        JGRMB245: {
                id: "JGRMB245",
                key: "jiguang.rmb.lb288",
                price: 288,
                goods: [{ "goodID": 6124, "count": 1 }],
                restrictions: { type: 4 },
                text: "288小乔时装礼包"
        },
        JGRMB246: {
                id: "JGRMB246",
                key: "jiguang.rmb.lb288",
                price: 288,
                goods: [{ "goodID": 6043, "count": 1 }],
                restrictions: { type: 4 },
                text: "288马超时装礼包"
        },
        JGRMB247: {
                id: "JGRMB247",
                key: "jiguang.rmb.lb288",
                price: 288,
                goods: [{ "goodID": 6078, "count": 1 }],
                restrictions: { type: 4 },
                text: "288郝昭时装礼包"
        },
        JGRMB248: {
                id: "JGRMB248",
                key: "jiguang.rmb.lb288",
                price: 288,
                goods: [{ "goodID": 6055, "count": 1 }],
                restrictions: { type: 4 },
                text: "288赵云时装礼包"
        },
        JGRMB249: {
            id: "JGRMB249",
            key: "jiguang.rmb.lb12",
            price: 12,
            goods: [{ "goodID": 5237, "count": 3 }],
            restrictions: { type: 4 },
            text: "12元庆字特惠礼包"
        },
        JGRMB250: {
            id: "JGRMB250",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [{ "goodID": 5237, "count": 39 }],
            restrictions: { type: 4 },
            text: "98庆特惠元礼包"
        },
        JGRMB251: {
            id: "JGRMB251",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{ "goodID": 5237, "count": 80 }],
            restrictions: { type: 4 },
            text: "288元庆字特惠礼包"
        },
        JGRMB252: {
            id: "JGRMB252",
            key: "jiguang.rmb.jb548",
            price: 548,
            goods: [{ "goodID": 5237, "count": 150 }],
            restrictions: { type: 4 },
            text: "548元庆特惠游戏礼包"
        },
        JGRMB253: {
            id: "JGRMB253",
            key: "jiguang.rmb.lb648",
            price: 648,
            goods: [{ "goodID": 5237, "count": 218 }],
            restrictions: { type: 4 },
            text: "648元庆特惠游戏礼包"
        },
        JGRMB255: {
            id: "JGRMB255",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{ "goodID": 6136, "count": 1 }],
            restrictions: { type: 4 },
            text: "288元无双上将时装特惠礼包"
        },
        JGRMB254: {
            id: "JGRMB254",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods: [{ "goodID": 6131, "count": 1 }],
            restrictions: { type: 4 },
            text: "128孙乾时装礼包1"
        },
        JGRMB256: {
            id: "JGRMB256",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{ "goodID": 6132, "count": 1 },{"goodID":4107,"count":1}],
            restrictions: { type: 4 },
            text: "288元蔡琰时装特惠礼包"
        },
        JGRMB257: {
            id: "JGRMB257",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods: [{ "goodID": 6131, "count": 1 }],
            restrictions: { type: 4 },
            text: "128孙乾时装礼包2"
        },
        JGRMB258: {
            id: "JGRMB258",
            key: "jiguang.rmb.jb30",
            price: 30,
            goods: [{ "goodID": 5404, "count": 1 }],
            restrictions: { type: 4 },
            text: "30元武器福袋礼包"
        },
        JGRMB259: {
            id: "JGRMB259",
            key: "jiguang.rmb.jb30",
            price: 30,
            goods: [{ "goodID": 5405, "count": 1 }],
            restrictions: { type: 4 },
            text: "30元防具福袋礼包"
        },
        JGRMB260: {
            id: "JGRMB260",
            key: "jiguang.rmb.jb30",
            price: 30,
            goods: [{ "goodID": 5406, "count": 1 }],
            restrictions: { type: 4 },
            text: "30元辅助品福袋礼包"
        },
        JGRMB261: {
            id: "JGRMB261",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [{ "goodID": 5021, "count": 50 },{"goodID":5002,"count":1000000}],
            restrictions: { type: 4 },
            text: "98水镜令特惠元礼包"
        },
        JGRMB262: {
            id: "JGRMB262",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [{ "goodID": 5023, "count": 350 },{"goodID":5002,"count":1000000}],
            restrictions: { type: 4 },
            text: "98积分特惠元礼包"
        },
        JGRMB263: {
            id: "JGRMB263",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [{ "goodID": 4001, "count": 1000 },{ "goodID": 4003, "count": 1000 },{ "goodID": 4004, "count": 1000 },{ "goodID": 4005, "count": 1000 },{ "goodID": 4006, "count": 1000 },{"goodID":5002,"count":1000000}],
            restrictions: { type: 4 },
            text: "98武将升阶特惠元礼包"
        },
        JGRMB264: {
            id: "JGRMB264",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods: [{ "goodID": 5232, "count": 80 },{"goodID":5002,"count":2000000}],
            restrictions: { type: 4 },
            text: "128稀*水镜令礼包"
        },
        JGRMB265: {
            id: "JGRMB265",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods: [{ "goodID": 5019, "count": 100 },{"goodID":5002,"count":2000000}],
            restrictions: { type: 4 },
            text: "128重铸石礼包"
        },
        JGRMB266: {
            id: "JGRMB266",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods: [{ "goodID": 5012, "count": 5000 },{"goodID":5002,"count":2000000}],
            restrictions: { type: 4 },
            text: "128萃铁石礼包"
        },
        JGRMB267: {
            id: "JGRMB267",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods: [{ "goodID": 5134, "count": 3 },{"goodID":5002,"count":3000000}],
            restrictions: { type: 4 },
            text: "128巅峰升阶石礼包"
        },
        JGRMB268: {
            id: "JGRMB268",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{ "goodID": 4133, "count": 1 },{"goodID":5003,"count":15000},{"goodID":4007,"count":400},{"goodID":4001,"count":1700},{"goodID":4003,"count":1200},{"goodID":4004,"count":4800},{"goodID":4005,"count":900},{"goodID":4006,"count":1000}],
            restrictions: { type: 4 },
            text: "288元无双上将特惠礼包"
        },
        JGRMB269: {
            id: "JGRMB269",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{ "goodID": 4134, "count": 1 },{"goodID":5003,"count":15000},{"goodID":4007,"count":400},{"goodID":4001,"count":1700},{"goodID":4003,"count":1200},{"goodID":4004,"count":4800},{"goodID":4005,"count":900},{"goodID":4006,"count":1000}],
            restrictions: { type: 4 },
            text: "288元江左周郎特惠礼包"
        },
        JGRMB270: {
            id: "JGRMB270",
            key: "jiguang.rmb.lb6",
            price: 6,
            goods: [{"goodID":5476,"count":10}],
            restrictions: { type: 4 },
            text: "6礼包"
        },
        JGRMB271: {
            id: "JGRMB271",
            key: "jiguang.rmb.lb12",
            price: 12,
            goods: [{"goodID":5476,"count":20}],
            restrictions: { type: 4 },
            text: "12元聚灵石特惠礼包"
        },
        JGRMB272: {
            id: "JGRMB272",
            key: "jiguang.rmb.lb98",
            price: 98,
            goods: [{"goodID":5476,"count":200}],
            restrictions: { type: 4 },
            text: "98聚灵石特惠元礼包"
        },
        JGRMB273: {
            id: "JGRMB273",
            key: "jiguang.rmb.lb128",
            price: 128,
            goods: [{"goodID":5476,"count":300}],
            restrictions: { type: 4 },
            text: "128聚灵石礼包"
        },
        JGRMB274: {
            id: "JGRMB274",
            key: "jiguang.rmb.lb288",
            price: 288,
            goods: [{"goodID": 4135,"count": 1},{"goodID": 5003,"count": 15000},{"goodID": 4007,"count": 400},{"goodID": 4001,"count": 1700},
                    {"goodID": 4003,"count": 1200},{"goodID": 4004,"count": 4800},{"goodID": 4005,"count": 900},{"goodID": 4006,"count": 1000}],
            restrictions: { type: 1 },
            text: "武圣关公礼包"
        },
        JGRMB275: {
            id: "JGRMB275",
            key: "jiguang.rmb.jb30",
            price: 30,
            goods: [{ "goodID": 1234, "count": 1 },{ "goodID": 5001, "count": 10000 },{ "goodID": 5204, "count": 1 }],
            restrictions: { type: 4 },
            text: "7天乐4天礼包"
        },
        JGRMB276: {
            id: "JGRMB276",
            key: "jiguang.rmb.jb30",
            price: 30,
            goods: [{ "goodID": 4022, "count": 400 },{ "goodID": 5002, "count": 5000000 },{ "goodID": 5204, "count": 1 }],
            restrictions: { type: 4 },
            text: "7天乐5天礼包"
        },
        JGRMB277: {
            id: "JGRMB277",
            key: "jiguang.rmb.jb30",
            price: 30,
            goods: [{ "goodID": 2061, "count": 1 },{ "goodID": 5001, "count": 10000 },{ "goodID": 5204, "count": 1 }],
            restrictions: { type: 4 },
            text: "7天乐6天礼包"
        },
        JGRMB278: {
            id: "JGRMB278",
            key: "jiguang.rmb.jb30",
            price: 30,
            goods: [{ "goodID": 4109, "count": 1 },{ "goodID": 1157, "count": 1 },{ "goodID": 5204, "count": 1 }],
            restrictions: { type: 4 },
            text: "7天乐7天礼包"
        },
        JGRMB279: {
            id: "JGRMB279",
            key: "jiguang.rmb.lb6",
            price: 6,
            goods: [{ "goodID": 1156, "count": 1 },{ "goodID": 4022, "count": 100 }],
            restrictions: { type: 4 },
            text: "7天乐1天礼包"
        },
        JGRMB280: {
            id: "JGRMB280",
            key: "jiguang.rmb.lb12",
            price: 12,
            goods: [{ "goodID": 2257, "count": 1 },{ "goodID": 5204, "count": 1 }],
            restrictions: { type: 4 },
            text: "7天乐2天礼包"
        },
        JGRMB281: {
            id: "JGRMB281",
            key: "jiguang.rmb.jb30",
            price: 30,
            goods: [{ "goodID": 6001, "count": 1 },{ "goodID": 5204, "count": 1 }],
            restrictions: { type: 4 },
            text: "7天乐3天礼包"
        },

}