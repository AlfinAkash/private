import MyAccount from "../../UI/Account/MyAccount/MyAccount";
import ManageAccount from "../../UI/Account/ManageAccount/ManageAccount";
import { TabTitle } from "../../../utils/General";

export const Profile = () => {

    TabTitle("MyAccount-AlfinAkash")

    return ( 
        <MyAccount />
     );
}

export const AccountManager = () => {

    TabTitle("MyAccount-AlfinAkash")

    return (
        <ManageAccount />
    );
}