import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = "https://dev.tovtrip.com/usersvc/api/v1";
const API_KEY = "037cb34d-c5ee-4169-b2fd-bec049f77ecf";

const fetchWrapper = async (URL, options = {}) => {
  const token = await AsyncStorage.getItem("token");
  return await fetch(URL, {
    ...options,
    headers: {
      apiKey: API_KEY,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "x-platform": "android/ios",
    },
  });
};

async function login(formData) {
  const response = await fetchWrapper(`${BASE_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(formData),
  });

  const { data, message } = await response.json();
  if (data.access_token) {
    await AsyncStorage.setItem("token", data.access_token);
  } else {
    await AsyncStorage.removeItem("token");
  }

  return { message };
}

async function getMyInfo() {
  const response = await fetchWrapper(`${BASE_URL}/users/me`);
  const data = await response.json();
  return data;
}

export { login, getMyInfo };
