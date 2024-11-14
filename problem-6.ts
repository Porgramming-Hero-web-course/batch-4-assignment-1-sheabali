{
    // problem 6

    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    const updateProfile = (profile: Profile, updates: Partial<Profile>):Profile => {

        return {
            ...profile,
            ...updates,
        }
    }

    const myProfile: Profile = {name: "Alice", age: 25, email:"alice@example.com"}
    console.log(updateProfile(myProfile, {age: 26}))

    // 
}