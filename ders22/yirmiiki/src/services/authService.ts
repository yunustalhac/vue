// @ts-ignore
import supaBaseClient from "../plugins/supaBaseClient"

export interface IUser {
    id: number
    displayName: string
}

class AuthService {
    async login(userName: string, password: string): Promise<boolean> {

        const {error} = await supaBaseClient.auth.signInWithPassword({
            email: userName,
            password: password
        })

        if (error) {
            return false
        } else {
            return true
        }
    }

    async logout(): Promise<boolean> {

        await supaBaseClient.auth.signOut()
        return true

    }

    async getUser(): Promise<IUser | null> {

        const {data} = await supaBaseClient.auth.getUser()
        const user = data.user

        return {
            id: 1,
            displayName: user?.email!
        }

    }

    async isAuth(): Promise<boolean> {
        const {data} = await supaBaseClient.auth.getSession()
        if (data.session) {
            return true
        } else {
            return false
        }


    }
}

export default new AuthService()