type UserDetails = {
    id: number,
    name: string,
    email:string,
}

type AdminDetails = UserDetails & {
    role: string,
    password: number
}

export type {AdminDetails, UserDetails}

