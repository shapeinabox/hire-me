

export interface Child {
    childId: string
    institutionId: string
    groupId: string
    createdTime: string
    name:{
        fullName: string
    },
    birthday: string
    gender: number
    startDate: string
    image: {
        small: string
        large: string
        empty: boolean
    }
    checkedIn: boolean
    checkinTime: string
    pickupTime: string
}