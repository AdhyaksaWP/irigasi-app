
import { Client, Account, ID, Databases, Query } from 'react-native-appwrite';
import { Alert } from 'react-native';
// Init your React Native SDK


export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.app.irigasi',
    projectId: '66aa29f6000e2687dc7c',
    databaseId: '66aa2c51001bfcc8db55',
    useCollectionId: '66aa2c8d003e5b5d83ed',
    storageId: '66aa2dea0032544d84bc',
}

const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.

const account = new Account(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
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

export const signIn = async (email,password) => {
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