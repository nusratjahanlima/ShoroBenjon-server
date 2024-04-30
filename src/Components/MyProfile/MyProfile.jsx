
import './MyProfile.css'
import admin_profile from '../../assets/admin_profile.png'
import edit_profile from '../../assets/edit-profile.png'
import admin_role from '../../assets/admin-role.png'
import admin_email from '../../assets/email.png'
import admin_contact from '../../assets/contact.png'
import admin_region from '../../assets/region.png'

const MyProfile = () => {




    return (
        <div>
            <form>
                <div className="admin-main">
                <div className="admin-left">
                <div className="admin-cover">
                    <img src={admin_profile} alt="" />
                </div>
                <div className="admin-heading">
                    <div className="admin-profile-right">
                        <p>Nusrat Jahan</p>
                        <p>Dhaka, Bangladesh</p>
                        <p>age: 25 | Gende: Female | Status: <span>Active*</span></p>
                    </div>

                    <div className="edit-profile">
                        <img src={edit_profile} alt="" />
                        <p>Edit Profile</p>
                    </div>
                </div>

                <div className="admin-details-main">
                    <div className="admin-details">
                        <div className="admin-details-sub">
                        <img src={admin_role} alt="" />
                        <p>Role:</p>
                        </div>
                        <p>Administrator</p>
                    </div>
                    <div className="admin-details">
                        <div className="admin-details-sub">
                        <img src={admin_email} alt="" />
                        <p>Email:</p>
                        </div>
                        <p>nusratjahan@gmail.com</p>
                    </div>
                    <div className="admin-details">
                        <div className="admin-details-sub">
                        <img src={admin_contact} alt="" />
                        <p>Contact:</p>
                        </div>
                        <p>01748567834</p>
                    </div>
                    <div className="admin-details">
                        <div className="admin-details-sub">
                        <img src={admin_region} alt="" />
                        <p>Region:</p>
                        </div>
                        <p>Central Us</p>
                    </div>
                    <hr />
                </div>

                <div className="admin-activities">
                    <p>Your Activities</p>
                    <hr />
                    <div className="admin-activities-details">
                        <div className="admin-activities-details-sub">
                            <p>You added a role Sales Lead</p>
                            <div className="date-time">
                                <p>19/02/2023</p>
                                <p>10:40:55 AM</p>
                            </div>
                        </div>

                        

                        
                    </div>
                </div>
                </div>

                <div className="admin-right">
                <div className="admin-activities">
                    <p>Recent Activities</p>
                    <hr />
                    <div className="admin-activities-details">
                        <div className="admin-activities-details-sub">
                            <p>You added a role Sales Lead</p>
                            <div className="date-time">
                                <p>19/02/2023</p>
                                <p>10:40:55 AM</p>
                            </div>
                        </div>

                        <div className="admin-activities-details-sub">
                            <p>You added a role Sales Lead</p>
                            <div className="date-time">
                                <p>19/02/2023</p>
                                <p>10:40:55 AM</p>
                            </div>
                        </div>

                        <div className="admin-activities-details-sub">
                            <p>You added a role Sales Lead</p>
                            <div className="date-time">
                                <p>19/02/2023</p>
                                <p>10:40:55 AM</p>
                            </div>
                        </div>

                        <div className="admin-activities-details-sub">
                            <p>You added a role Sales Lead</p>
                            <div className="date-time">
                                <p>19/02/2023</p>
                                <p>10:40:55 AM</p>
                            </div>
                        </div>

                        <div className="admin-activities-details-sub">
                            <p>You added a role Sales Lead</p>
                            <div className="date-time">
                                <p>19/02/2023</p>
                                <p>10:40:55 AM</p>
                            </div>
                        </div>

                        <div className="admin-activities-details-sub">
                            <p>You added a role Sales Lead</p>
                            <div className="date-time">
                                <p>19/02/2023</p>
                                <p>10:40:55 AM</p>
                            </div>
                        </div>

                        <div className="admin-activities-details-sub">
                            <p>You added a role Sales Lead</p>
                            <div className="date-time">
                                <p>19/02/2023</p>
                                <p>10:40:55 AM</p>
                            </div>
                        </div>

                        <div className="admin-activities-details-sub">
                            <p>You added a role Sales Lead</p>
                            <div className="date-time">
                                <p>19/02/2023</p>
                                <p>10:40:55 AM</p>
                            </div>
                        </div>

                        <div className="admin-activities-details-sub">
                            <p>You added a role Sales Lead</p>
                            <div className="date-time">
                                <p>19/02/2023</p>
                                <p>10:40:55 AM</p>
                            </div>
                        </div>

                       
                       
                    </div>
                </div>
                </div>
                </div>
            </form>
        </div>
    );
};

export default MyProfile;