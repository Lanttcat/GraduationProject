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
                boxId: 1,
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