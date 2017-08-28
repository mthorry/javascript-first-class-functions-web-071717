function receivesAFunction(callback) {
  callback();
};

function returnsAnAnonymousFunction(argument) {
  return function(){}
};

function returnsANamedFunction(argument) {
  return function name(){}
}