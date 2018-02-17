/**
 * 用户界面盒子列表
 */

export let state = () => {
    return {
        boxList: [
            {
                boxId: 1,
                name: '我的收藏',
                icon: '',
                route: {
                    name: 'celect',
                    path: '/setting'
                }
            },
            {
                boxId: 2,
                name: '我的攻略',
                icon: '',
                route: {
                    name: 'celect',
                    path: '/setting'
                }
            },
            {
                boxId: 3,
                name: '图集',
                icon: '',
                route: {
                    name: 'setting',
                    path: '/setting'
                }
            },
            {
                boxId: 4,
                name: '设置',
                icon: '',
                route: {
                    name: 'setting',
                    path: '/setting'
                }
            }
        ]
    }
}