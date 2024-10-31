import axios from 'axios';
import { User } from '../model/User.ts';
import { makeAutoObservable } from 'mobx';

class UserStore{

    public users : User[] = [];
    public filteredUsers: User[] = [];

    constructor() {
        makeAutoObservable(this);
        this.fetchUsers();
    }

    public fetchUsers(){
        axios.get<User[]>('http://localhost:3000').then(response => {
            this.users = response.data;
            this.filteredUsers = response.data;
        });
    }

    public filterUsers(term : string){
        if (term) {
            this.filteredUsers = this.users.filter(user =>
                user.name?.toLowerCase().includes(term.toLowerCase())
            );
        } else {
            this.filteredUsers = this.users;
        }
    }
}

export const userStore : UserStore = new UserStore();