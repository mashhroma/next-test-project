interface Profile {
    id: number,
    name: string,
    email: string,
    address: Address,
}

interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
}