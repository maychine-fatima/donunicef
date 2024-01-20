import axios from 'axios';


export const fetchDataOrganizations = async () => {
    try {
      const response = await axios.get('http://localhost:3000/getOrganizations');
      console.log(response.data)
      return response.data || [];
    } catch (error) {
      console.error('Error fetching data:', error);
    }
};

