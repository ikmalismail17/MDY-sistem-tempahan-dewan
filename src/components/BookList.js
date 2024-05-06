const tempahDewan = [
    {
        id: 1,
        Nama: "Kamal",
        Dewan: "Dewan Lestari",
        Tarikh: "29/04/2024",
        Status: "Ditempah"
    },
    {
        id: 2,
        Nama: "Afif",
        Dewan: "Dewan Dato' Madi",
        Tarikh: "07/05/2024",
        Status: "Ditempah"
    },
    {
        id: 3,
        Nama: "Zikri",
        Dewan: "Dewan Lestari",
        Tarikh: "20/05/2024",
        Status: "Disahkan"
    },
    {
        id: 4,
        Nama: "Syauqi",
        Dewan: "Dewan Lestari",
        Tarikh: "15/05/2024",
        Status: "Disahkan"
    },
    {
        id: 5,
        Nama: "Adam",
        Dewan: "Dewan Dato' Madi",
        Tarikh: "20/06/2024",
        Status: "Ditempah"
    },
    {
        id: 6,
        Nama: "Yusuf",
        Dewan: "Dewan Dato' Madi",
        Tarikh: "30/04/2024",
        Status: "Ditolak"
    },
]
const BookList = () => {
    return (
        <div className="overflow-x-auto">
        <table className="table table-pin-cols">
            <thead className="">
            <tr>
                <th></th>
                <th>Nama</th>
                <th>Dewan</th>
                <th>Tarikh</th>
                <th>Status</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {tempahDewan.map((tempah, index) => (
                <tr key={tempah.id} className="hover">
                    <th>{index + 1}</th>
                    <td>{tempah.Nama}</td>
                    <td>{tempah.Dewan}</td>
                    <td>{tempah.Tarikh}</td>
                    <td>
                    <div className={`badge ${
                        tempah.Status === "Ditempah" ? "badge-warning" :
                        tempah.Status === "Disahkan" ? "badge-success" :
                        "badge-error"
                    }`}>
                        {tempah.Status}
                    </div>
                    </td>
                    <td className="text-center">
                        <button className="btn btn-sm btn-ghost">
                            More
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                            <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

export default BookList;