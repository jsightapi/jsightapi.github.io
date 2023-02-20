const name = document.getElementById('aiform-name').value;
            const email = document.getElementById('aiform-email').value;

            if(name == '')
            {
                alert('Fill your name!');
                return false;
            }
            if(email == '')
            {
                alert('Fill your email!');
                return false;
            }

            const data = { name: name, email: email };

            fetch('https://jsightforms-ce0e.restdb.io/rest/aiform', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-apikey': '63f3ae20478852088da684cf',
                },
                body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
                return false;
            });

            document.getElementById('jsightai-form').innerHTML = '<p>Your API improvement request has been submitted. JSight API will send you the response soon.</p>';
            
            return false;