
import { Client, Account, ID, Databases, Query } from 'react-native-appwrite';
// import { Alert } from 'react-native';
// import { EXPO_PUBLIC_APPWRITE_PROJECTID, EXPO_PUBLIC_APPWRITE_DATABASEID, EXPO_PUBLIC_APPWRITE_STORAGEID, EXPO_PUBLIC_APPWRITE_USECOLLECTIONID } from '@env';

interface appWriteCofigTypes {
    endpoint: string;
    platform: string;
    projectId: any;
    databaseId: any;
    useCollectionId: any;
    storageId: any;
}

export const appwriteConfig:appWriteCofigTypes = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.app.irigasi',
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECTID,
    databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASEID,
    useCollectionId: process.env.EXPO_PUBLIC_APPWRITE_USECOLLECTIONID,
    storageId: process.env.EXPO_PUBLIC_APPWRITE_STORAGEID,
}

const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform)

const account = new Account(client);
const databases = new Databases(client);

export const createUser = async (email: any, password: any, username: any) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

        if (!newAccount) throw Error;
        await signIn(email, password)

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.useCollectionId,
            ID.unique(),
            {
                email,
                username,
            }
        )
        
        return newUser;
    } catch (error) {
        console.log(error);        
    }
}

export const signIn = async (email: any,password: any) => {
    try {
        const user = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.useCollectionId,
            [Query.equal('email', email)]
        );

        if (user.documents.length === 0){
            return false;
        }
        else {
            const session = await account.createEmailPasswordSession(email, password);
            console.log("Masuk");
            return session;
        }
    } catch (error) {
        console.log(error);
        
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();

        if (!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.useCollectionId,
            [Query.equal('email', currentAccount.email)]
        );

        if (!currentUser) throw Error;
        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
        
    }
}

export async function getCurrentSession() {
    const session = await account.getSession('current');
    return session;
}

export async function deleteCurrentSession() {
    await account.deleteSession('current');
}