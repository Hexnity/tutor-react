
export interface GeneralSetting {
    label: string;
    value: string;
}


export interface NotificationSetting {
    label: string;
    description: string;
    value: string;
}


export interface AccountSettings {
    general: GeneralSetting[];
    notifications: NotificationSetting[];
}
