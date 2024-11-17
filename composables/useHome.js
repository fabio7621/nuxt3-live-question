export const useHome = () => {
  const newsList = ref([]);
  const isLoading = ref(false);

  const getNews = async () => {
    const url = `https://nuxr3.zeabur.app/api/v1/home/news/`;
    isLoading.value = true;

    const res = await useFetch(url);
    newsList.value = res.data.value.result;

    isLoading.value = false;
  };

  return {
    newsList,
    isLoading,
    getNews,
  };
};
