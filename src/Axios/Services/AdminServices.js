import { axiosAdminInstance } from "../Instances/Instance";

// get client list
export const getClientsList = async (token) => {
    try {
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,



            },

        }
        const response = await axiosAdminInstance.get('clients/', config)
        return response.data
    } catch (error) {
        console.log(error)
        console.log('some error occured')
    }
}

// get experts list
export const getExpertsList = async (token) => {
    try {
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,

            }
        }
        const response = await axiosAdminInstance.get('experts/', config)
        return response.data
    } catch (error) {
        console.log(error)
        console.log('some error occured')
    }
}

// blocking and unblocking experts
export const handleExpertStatus = async (token, values) => {
    try {
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        }
        const response = await axiosAdminInstance.patch('experts/', values, config)
        return response.data

    }
    catch (error) {
        console.log(error)
    }
}

// blocking and unblocking clients
export const handleClientStatus = async (token, values) => {
    try {
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        }
        const response = await axiosAdminInstance.patch('clients/', values, config)
        return response.data

    }
    catch (error) {
        console.log(error)
    }
}

// Pending Experts Apporoving
export const getPendingExperts = async (token) => {
    try {
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,

            }
        }
        const response = await axiosAdminInstance.get('pending-experts/', config)
        return response.data

    } catch (error) {
        console.log(error)

    }
}

// taking single pending expert
export const getSinglePendingExpert = async (token, id) => {
    try {
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        }
        const response = await axiosAdminInstance.get(`single-pending-expert/${id}/`, config)
        return response.data

    }
    catch (error) {
        console.log(error)

    }
}


// add expert and reject expert
export const handleAddExpertAndRejectExpert = async (token, id, data) => {
    try {
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        }
        const response = await axiosAdminInstance.patch(`single-pending-expert/${id}/`, data, config)
        return response.data

    }
    catch (error) {
        console.log(error)
    }
}

// get domain list
export const getDomains = async (token) => {
    try {
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        }

        const response = await axiosAdminInstance.get('domains/', config)
        return response.data


    }
    catch (error) {
        console.log(error)

    }
}

// delete Domain
export const DeleteDomains = async (token, id) => {
    try {
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`
            },
            params: {
                id: id,
            },
        }
        
        const response = await axiosAdminInstance.delete('domains/', config)
        return response.data
    }
    catch (error) {
        console.log(error.message)

    }
}

//add domain
export const AddDomain = async (token, data) => {
    try {
        const config = {
            headers: {
                "Content-type": "multipart/formdata",
                Authorization: `Bearer ${token}`,
            }
        }
        const response = await axiosAdminInstance.post('domains/', data, config)
        return response.data

    }
    catch (error) {
        console.log(error)
    }
}

export const editDomains = async (token,data) => {
    try {
        const config = {
            headers: {
                "Content-type": "multipart/formdata",
                Authorization: `Bearer ${token}`,
            }
        }
        const response = await axiosAdminInstance.patch('domains/', data, config)
        return response.data

    }
    catch (error) {
        console.log(error)
    }

}

// get tutorials

export const getTutorial = async (token) => {
    try {
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        }
        const response = await axiosAdminInstance.get('tutorials/', config)
        return response.data

    }
    catch (error) {
        console.log(error)
    }

}

// delete tutorial
export const DeleteTutorials = async (token,id) => {

    try {

        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            params: {
                id: id,
            },
        }

        
        const response = await axiosAdminInstance.delete('tutorials/', config)
        return response.data

    }
    catch (error) {
        console.log(error.message)

    }

}

export const AddTutorial = async (token,data) => {
    try {
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        }

        const response = await axiosAdminInstance.post('tutorials/', data, config)
        return response.data

    }
    catch (error) {
        console.log(error.message)
    }
}

// edit tutorial
export const EditTutorial = async (token,data) => {
    try {
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        }
        const response = await axiosAdminInstance.patch('tutorials/', data, config)
        return response.data

    }
    catch (error) {
        console.log(error.message)

    }
}

// get sub-tutorials
export const getSubTutorials = async (token) => {
    try {
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        }
        const response = await axiosAdminInstance.get('sub-tutorials/', config)
        return response.data

    }
    catch (error) {
        console.log(error.message)
    }

}

// delete sub-tutorial
export const DeleteSubTutorial = async (token,id) => {
    try {
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            params: {
                id: id,
            },
        }
        const response = await axiosAdminInstance.delete('sub-tutorials/', config)
        return response.data

    }
    catch (error) {
        console.log(error.message)
    }
}

// add sub-tutorial
export const AddSubTutorial = async (token,data) => {
    try {
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`

            }
        }
        const response = await axiosAdminInstance.post('sub-tutorials/', data, config)
        return response.data

    }
    catch (error) {
        console.log(error)
    }
}

export const EditSubTutorial = async (token,data) => {
    try {
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        const response = await axiosAdminInstance.patch('sub-tutorials/', data, config)
        return response.data

    }
    catch (error) {
        console.log(error.message)
    }
}


// get orders

export const getOrders = async (token) => {
    try {
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        const response = await axiosAdminInstance.get('domain-purchase/',config)
        return response.data

    }
    catch (error) {
        console.log(error.message)
    }
}
