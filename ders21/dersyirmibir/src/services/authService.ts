interface IUser {
    id: number
    displayName: string
}

const strogeKeys = {
    USER: "user",
    IS_AUTH: "isAuth"
}

class authService {
    login(userName: string, password: string): Promise<boolean> {
        if (userName == "deneme" && password == "123") {


            const user: IUser = {
                id: 1,
                displayName: "yunus talha çoban"
            }

            localStorage.setItem(strogeKeys.USER, JSON.stringify(user))
            localStorage.setItem(strogeKeys.IS_AUTH, JSON.stringify(true))

            return Promise.resolve(true)


        }
        return Promise.resolve(false)
    }

    logout(): Promise<boolean> {

        localStorage.removeItem(strogeKeys.USER)
        localStorage.removeItem(strogeKeys.IS_AUTH)

        return Promise.resolve(true)


    }

    getUser(): Promise<IUser | null> {
        const user = localStorage.getItem(strogeKeys.USER)
        if (user) {
            return JSON.parse(user)

        } else {
            return Promise.resolve(null)
        }
    }

    isAuth(): boolean {
        return JSON.parse(localStorage.getItem(strogeKeys.IS_AUTH) || "false")
    }
}

export default new authService()