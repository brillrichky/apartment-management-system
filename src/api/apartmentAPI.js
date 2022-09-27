//file ini mewakili request guests

const apiApartmentURL = 'http://localhost:3344/units'; //1

export async function getAllUnits(){ //2 akan merequest data guest dari backend
    const response = await fetch //3 fetch fungsi bawaan js browser, u/ merequest keserver 
    (apiApartmentURL);

    return response.json(); //4 yg direturn itu objek jsonnya, ingat json itu method
}

export async function createUnit(unit){
    const response = await fetch (apiApartmentURL,
        {
            headers  : {
                "Accept" : "application/json",
                "Content-Type" : "application/json",
            },
            method: 'POST',
            body: JSON.stringify(unit)
        });

        return response.json();
    }

export async function updateUnit(unit){
    const response = await fetch (`${apiApartmentURL}/${unit.id}`,
        {
            headers  : {
                "Accept" : "application/json",
                "Content-Type" : "application/json",
            },
            method: 'PUT',
            body: JSON.stringify(unit)
        });

        return response.json();
    }

export async function deleteUnit(id){
    const response = await fetch (`${apiApartmentURL}/${id}`,
        {
            headers  : {
                "Accept" : "application/json",
                "Content-Type" : "application/json",
            },
            method: 'DELETE',
        });

        return response.json();
    }

//frontend  : backend
//client    : server
//request   : response
//akan menerima respon dari server

//request HTTP:
// 1. GET       : Mendapatkan data biasanya berbentuk array atau single object
//              : /guests -> semua guest datanya akan dikembalikan (array)
//              : /guests/1 -> meminta 1 data guest dengan id = 1 (single object)
// 2. POST      : digunakan untuk mengirimkan data yang belum ada di database server, pembuatan data baru (add guest, add locker)
// 3. PUT/PATCH : digunakan untuk memperbarui data yang sudah ada di database serber, perubahan data (update guest, update locker, close locker, open locker)
// 4. DELETE    : menghapus data yang sudah ada di database server, berdasarkan id dari datanya.

