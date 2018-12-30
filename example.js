{ console.log('--- name of exercise ---');

console.log('--- og code ---');

  function og(arg) {
    const new_arr = [];
    for (let item of arg) {
      let new_item = string_and_split(item);
      new_arr.push(new_item)
    }
    return new_arr;

    function string_and_split(_item) {
      const step_1 = String(_item);
      const step_2 = step_1.split('');
      return step_2;
    }
  };


console.log('--- test cases ---');

  const test_cases = [
      {name: '[1234]', args: [[1234]], expected: [['1','2','3','4']]},
      {name: '[1,2,3,4]', args: [[1,2,3,4]], expected: [['1'],['2'],['3'],['4']]},
      {name: '"1234"', args: ['1234'], expected: [['1'],['2'],['3'],['4']]},
    ];
  run_tests(og, test_cases);


console.log('--- factor it in ---');

  // open a block under the function call
  // paste in the body of the function
  // create args object
  // name-space all args variables to the args object
  // replace return value with receiver var
  function factored_in(arg) {
    const new_arr = [];
    for (let item of arg) {
      let new_item; { // = string_and_split(item);
        const args = {_item: item}

        const step_1 = String(args._item);
        const step_2 = step_1.split('');

        new_item = step_2
      };
      new_arr.push(new_item)
    }
    return new_arr;
  };
  run_tests(factored_in, test_cases)


console.log('--- expansioned ---');

  // point all args.props to their lexical variable
  // delete the args object
  function expansioned(arg) {
    const new_arr = [];
    for (let item of arg) {
      let new_item; { // = string_and_split(item);
        const step_1 = String(item);
        const step_2 = step_1.split('');
        new_item = step_2
      };
      new_arr.push(new_item)
    }
    return new_arr;
  };
  run_tests(expansioned, test_cases)


console.log('--- fully merged ---');

  // point all args.props to their lexical variable
  // delete the args object
  // de-block
  // rename variables
  function merged(arg) {
    const new_arr = [];
    for (let item of arg) {
      const stringed_item = String(item);
      const new_item = stringed_item.split('');
      new_arr.push(new_item)
    }
    return new_arr;
  };
  run_tests(merged, test_cases)



// ------- testing utils ------- 

function run_tests(_target, _cases) {
  for (let t_case of _cases) {
    const expected = t_case.expected;
    const actual = _target(... t_case.args, false);

    let pass;
    if (typeof expected === 'object') {
      const _actual = JSON.stringify(actual);
      const _expected = JSON.stringify(expected);
      pass = _actual === _expected;
    } else {
      pass = actual === expected;
    };

    if (!pass) {
      console.log(`${t_case.name}: \n`);
      console.log(`   actual: ${typeof actual},`, actual);
      console.log(`   expected: ${typeof expected},`, expected);
    };
  };
};

function log_reports(_target, _cases) {
  const report = {}
  for (let t_case of _cases) {
     report[t_case.name] = _target(...t_case.args) 
  }
  console.log(report)
}

}

