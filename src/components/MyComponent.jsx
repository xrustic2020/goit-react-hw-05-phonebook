import withHigherOrderComponent from './withHigherOrderComponent';

const MyComponent = (magicNumber = 0) => {
  console.log('object');
  return (
    <div>
      MyComponent
      <span>magic Number: {magicNumber}</span>
    </div>
  );
};

export default withHigherOrderComponent(MyComponent);
