export const GettingStorage=(key)=>{
    return localStorage.getItem(key)
    }

    export const SettingStorage=(key,value)=>{
        localStorage.setItem(key,value)
        return true;
        }    