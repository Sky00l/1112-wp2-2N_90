import styled from 'styled-components';
import CreateCabinForm from './CreateCabinForm';
import { useCabins } from './useCabins';
import Spinner from '../../ui/Spinner';

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function CabinTable() {
  const {data,isLoading} = useCabins (); 

  if(isLoading) return <Spinner/>;
  console.log('cabins data', data);
  return (
    <>
      <Table role='table'>
        <TableHeader role='row'>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </TableHeader>
        {/* <img src={data[0].image}/> */}
        {data.map((cabin) => (
    <div role="row" key={cabin.id}>
      <img src={cabin.image} alt={cabin.name} />
    </div>
  ))}
      </Table>
      {/* <CreateCabinForm /> */}
    </>
  );
}

export default CabinTable;
