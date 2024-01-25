const axiosInstance = axios.create({
    baseURL : 'https://crudcrud.com/api/74a2572894ad4d70859eff1648642425'
    baseURL : 'https://crudcrud.com/api/96374143b6a94b12b762146cecc019f9'
});
function handleFormSubmit(event) {
    event.preventDefault();
@@ -58,11 +58,28 @@ function showNewUser(user){
            document.getElementById('email').value = res.data.email;
            document.getElementById('phone').value = res.data.phone; 
        });
        axiosInstance.delete(`/bookAppointment/${user._id}`)
        .then();
        parent.removeChild(li);
        document.getElementById('submit').style.display = 'none';
        document.getElementById('edit').style.display = 'inline-block';

        document.getElementById('edit').onclick = () => {
            const name = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;

            const obj = {
                name,
                email,
                phone
            };

            axiosInstance.put(`/bookAppointment/${user._id}`, obj)
                .then((res) => {
                    location.reload();
                });
        }
    }
    li.appendChild(input);
    li.appendChild(edit);
    parent.appendChild(li);
}
}