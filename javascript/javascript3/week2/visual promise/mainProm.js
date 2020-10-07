// translateOneByOne - Should translate the circles one at a time from their random start position to their target.
// Log something out after each element has been moved
function functionMove(selector, xCoord, yCoord) {
  return moveElement(document.querySelector(selector), {
    x: xCoord,
    y: yCoord,
  });
}

/*function translateOneByOne() {
  functionMove(".marks > li", 20, 300)
    .then(() => {
      console.log("Red circle moved");
    })
    .then(() => {
      return functionMove(".marks > li + li", 400, 300).then(() =>
        console.log("Blue circle moved")
      );
    })
    .then(() => {
      return functionMove(".marks > li + li + li", 400, 20).then(() => {
        console.log("Green circle moved");
      });
    });
}*/

//translateOneByOne();

async function translateOneByOne() {
  let response = await functionMove(".marks > li", 20, 300);
  //console.log(response);
  console.log("Red circle moved");

  response = await functionMove(".marks > li +li", 400, 300);
  console.log("Blue circle moved");

  response = await functionMove(".marks > li + li + li", 400, 20);
  console.log("Green circle moved");
  return response;
}
//translateOneByOne();

// translateAllAtOnce - Should translate all the circles at the same time from their random start position to their target.
// Log out something after all elements have been moved
/*function translateAllAtOnce() {
  const greenCircle = functionMove(".marks > li + li + li", 400, 20);
  const blueCircle = functionMove(".marks > li + li", 400, 300);
  const redCircle = functionMove(".marks > li", 20, 300);
  Promise.all([greenCircle, blueCircle, redCircle]).then(() => {
    console.log("All circles moved at the same time");
  });
}*/
//translateAllAtOnce();

async function translateAllAtOnce() {
  const greenCircle = functionMove(".marks > li + li + li", 400, 20);
  const blueCircle = functionMove(".marks > li + li", 400, 300);
  const redCircle = functionMove(".marks > li", 20, 300);
  await Promise.all([greenCircle, blueCircle, redCircle]);
  console.log("All circles moved at the same time");
}
translateAllAtOnce();


