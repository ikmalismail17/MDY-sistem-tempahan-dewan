import Paper from "./Paper";
import { useState } from "react";

const Profile = () => {
    const [updateProfile, setUpdateProfile] = useState(false);

    const handleUpdateProfile = () => {
        setUpdateProfile(!updateProfile);
    }

    const pengguna = {
        namaPengguna: "Muhammad Amirul Ikhwan bin Mohd Azmi",
        email: "amirulikhwan123@gmail.com",
        telefon: "0123456789",
        pengenalan: "123456789012"
    };
    const initials = pengguna.namaPengguna.split(' ').map((name,index) => index<2 ? name.charAt(0).toUpperCase():"").join('');
    
    return (
        <div className="grid gap-4 mt-3 place-items-center">
            <div className="avatar placeholder grid place-items-center font-bold text-xl">
                <div className="bg-neutral mb-3 text-neutral-content rounded-full w-32">
                    <span className="text-3xl">{initials}</span>
                </div>
                {pengguna.namaPengguna.toUpperCase()}
            </div>
            <Paper titleDewan="" custom={["px-10 pt-10 pb-5 my-3 bg-gray-300 space-y-4"]} customTitle={["text-2xl"]} titleBool={false}>
                <div className="overflow-auto">
                <table className="table border-4 border-separate">
                    <tbody>
                    <tr>
                        <th className="border-2">NAMA</th>
                        <td className={`border-2 ${updateProfile ? "w-96" : null}`}>
                            {updateProfile ? 
                                <input type="text" className="input input-sm w-full max-w-xs" value={pengguna.namaPengguna} /> :
                                pengguna.namaPengguna.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(' ')
                            }
                        </td>
                    </tr>
                    <tr>
                        <th className="border-2">E-MAIL</th>
                        <td className="border-2">
                            {updateProfile?
                            <input type="email" className="input input-sm w-full max-w-xs" value={pengguna.email} /> : 
                            pengguna.email.toLowerCase()
                            }
                        </td>
                    </tr>
                    <tr>
                        <th className="border-2">KAD PENGENALAN</th>
                        <td className="border-2">
                            {updateProfile ?
                            <input type="text" className="input input-sm w-full max-w-xs" value={pengguna.pengenalan} /> :
                            pengguna.pengenalan
                            }
                        </td>
                    </tr>
                    <tr>
                        <th className="border-2">NO.TELEFON</th>
                        <td className="border-2">
                            {updateProfile ?
                            <input type="text" className="input input-sm w-full max-w-xs" value={pengguna.telefon} /> :
                            pengguna.telefon
                            }
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
                <div className="flex justify-end">
                    {updateProfile ?
                     (
                    <div className="flex join">
                        <button className="btn btn-ghost join-item" onClick={handleUpdateProfile}>Batal</button> 
                        <button className="btn btn-ghost join-item" onClick={handleUpdateProfile}>Hantar</button>
                    </div>
                    )
                     :
                     <button className="btn btn-ghost" onClick={handleUpdateProfile}>Kemaskini</button>
                    }
                </div>
            </Paper>
        </div>
    );
}

export default Profile;