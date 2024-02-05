import { 
    SafeAuthPack,
    SafeAuthConfig,
    SafeAuthInitOptions 
} from "@safe-global/auth-kit";

const safeAuthConfig: SafeAuthConfig = {
    txServiceUrl: 'http://safe-transaction-mainnet.safe.global',
}
const safeAuthInitOptions: SafeAuthInitOptions = {
    enableLogging: true,
    showWidgetButton: false,
    chainConfig : {
        chainId: '0x1',
        rpcTarget: `${rpcUrl}`
    },
}

const safeAuthPack = new SafeAuthPack(safeAuthConfig);
await safeAuthPack.init(safeAuthInitOptions);

const authKitSignData = await safeAuthPack.signIn();    //  AuthKitSignInData {
                                                        //      eoa: string
                                                        //      safes?: string[]
                                                        //  }

safeAuthPack.getProvider();

await safeAuthPack.signOut();