import useFetch from '../../../utils/hooks/useFetch';

function FetchDos() {
  let {data} = useFetch("https://jsonplaceholder.typicode.com/albums" , []);
  console.log(data);

  return (
    <div>
      Fetch 2
    </div>
  );
}

export default FetchDos;