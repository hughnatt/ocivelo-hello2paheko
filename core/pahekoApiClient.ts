import { PahekoSqlResult, PahekoUser } from "./models/PahekoModels"

const PahekoUrl = process.env.PAHEKO_URL
const PahekoApiUser = process.env.PAHEKO_USER
const PahekoApiPassword = process.env.PAHEKO_PASSWORD

const fetchPaheko = (
    path: string,
    method: string,
    body: string | undefined = undefined
): Promise<Response> => fetch(`${PahekoUrl}/api/${path}`, {
    method,
    body,
    headers: {
        'Authorization': `Basic ${btoa(`${PahekoApiUser}:${PahekoApiPassword}`)}`,
        'Content-Type': 'application/json'
    }
});

const getUserByEmail = (email: string): Promise<PahekoUser | undefined> =>
    fetchPaheko('sql', 'POST', JSON.stringify({
        sql: `SELECT * FROM users WHERE email='${email}';`
    }))
        .then<PahekoSqlResult<PahekoUser>>(res => res.json())
        .then(x => x.results[0])

const createUser = (email: string, lastName: string, firstName: string) =>
    fetchPaheko('user/new', 'POST', JSON.stringify({
        'nom': lastName,
        'prenom': firstName,
        'email': email
    })).then<PahekoUser>(res => res.json())

const addMembershipToPahekoUser = () => {

}


export default { getUserByEmail, createUser }