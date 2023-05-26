describe("Tests lesson 23", () => {
    const desc = "<p>Find sum</p>";

    describe(desc, () => {
        it("Find sum of array", () => {
            const arr = [1, 2, 3, 4, 5, 6];
            const result = findSum(arr);

            // console.log(result)

            expect(result).toBe(21);
        });
    });

    const desc2 = "<p>Find max and min numbers</p>";

    describe(desc2, () => {
        it("Find max and min numbers of array", () => {
            const arr = [1, 2, 3, 4, 5, 6];
            const result = findMaxMin(arr);

            expect(result).toEqual({max: 6, min: 1});
        });
    });
});

describe("Tests lesson 26", () => {
    const desc = "<p>Accumulator</p>";

    describe(desc, () => {
        it("Should increment and decrement value be correct", () => {
            const accumulator = new Accumulator (5)
            accumulator.increment();
            accumulator.increment();
            accumulator.increment();

            accumulator.decrement();
            accumulator.decrement();
            accumulator.decrement();
            accumulator.decrement();

            expect(accumulator.value).toBe(4);
        });
    });

    const desc2 = "<p>Cancelable Accumulator</p>";

    describe(desc2, () => {
        it("Should cancel value be correct", () => {
            const cancel = new CancelableAccumulator(5);

            cancel.clear();
            expect(cancel.value).toBe(5);
        });
    });
});

describe("Tests lesson 28, photo functions", () => {
    const desc = "<p>makePhotoBigger</p>";

    describe(desc, () => {
        it("Should add class clickPhoto-bigger to the element", () => {
            const photoElement = document.createElement("img");
            photoElement.classList.add("clickPhoto-bigger");

            expect(photoElement.classList.contains("clickPhoto-bigger")).toBe(true);
        });
        it("Should add makePhotoBigger finction and remove eventListener from the element"), () => {
            const photoElement = document.createElement("img");
            photoElement.classList.add("photo");

            expect(photoElement.onclick).not.toEqual(makePhotoBigger);
        };
        it("Should add makePhotoSmaller function and add eventListener to the element"), () => {
            const photoElement = document.createElement("img");
            photoElement.classList.add("photo");

            expect(photoElement.onclick).toEqual(makePhotoSmaller);
        }
    });

    const desc1 = "<p>makePhotoSmaller</p>";

    describe(desc1, () => {
        it("Should remove class clickPhoto-bigger from the element", () => {
            const photoElement = document.createElement("img");
            photoElement.classList.remove("clickPhoto-bigger");

            expect(photoElement.classList.contains("clickPhoto-bigger")).toBe(false);
        });
        it("Should add class clickPhoto-smaller to the element"), () => {
            const photoElement = document.createElement("img");
            photoElement.classList.add("clickPhoto-smaller");

            expect(photoElement.classList.contains("clickPhoto-smaller")).toBe(true);
        };
        it("Should remove class clickPhoto-smaller from the element after 2s"), () => {
            const photoElement = document.createElement("img");
            photoElement.classList.add("clickPhoto-smaller");
            setTimeout(() => {
                expect(photoElement.classList.contains("clickPhoto-smaller")).toBe(false);
              }, 2000);
        }
    });
});

describe("Tests lesson 28, scroll", () => {
    const desc = "<p>Scroll function</p>";

    describe(desc, () => {
        it("Should scroll to section A when 'A' or 'a' is pressed"), () => {
            spyOn(sectionA, 'getBoundingClientRect').and.callThrough();
            const event = new KeyboardEvent('keydown', { key: 'a' });
            document.dispatchEvent(event);
          
            expect(sectionA.getBoundingClientRect).toHaveBeenCalled();
            expect(window.scroll).toHaveBeenCalledWith({
              top: jasmine.any(Number),
              left: jasmine.any(Number),
              behavior: 'smooth'
            });
          };
        });
    });