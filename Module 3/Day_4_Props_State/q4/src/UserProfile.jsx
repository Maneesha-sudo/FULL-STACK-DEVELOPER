import UserInfo from "./UserInfo";

function UserProfile(){
    return(
        <>
        <UserInfo name="manu" age={23}/>
        <UserInfo name="hari" age={34}/>
        <UserInfo name="john" age={31}/>
        </>
    )
}
export default UserProfile;