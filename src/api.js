const api = 'https://iot-auth-api.herokuapp.com/app'

function http(route = '/', { method = 'GET', body, ...args } = {}) {
    if (body) body = JSON.stringify(body)
    return fetch(api + route, {
        headers: {
            'Content-Type': 'application/json'
        },
        method,
        body,
        ...args
    }).then(res => res.json())
}

export const getDevices = filters => http('/devices')

export const getNewDevices = () => http('/devices/new')

export const getDevice = id => http(`/devices/${id}`)

export const deleteDevice = id => http(`/devices/${id}`, { method: 'DELETE' })

export const authorize = id => http(`/devices/${id}/authorize`, { method: 'PUT' })

export const unauthorize = id => http(`/devices/${id}/authorize`, { method: 'DELETE' })

export const getData = filters => http('/data')

export const deleteData = createdAt => http(`/data/${createdAt}`, { method: 'DELETE' })

