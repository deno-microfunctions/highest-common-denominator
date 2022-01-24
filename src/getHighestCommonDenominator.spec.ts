import { assertEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts"

import { getHighestCommonDenominator } from "./getHighestCommonDenominator.ts"


Deno.test("should provide the highest common denominator", async () => {

    assertEquals(getHighestCommonDenominator(21, 14), 7)

    assertEquals(getHighestCommonDenominator(18, 20000), 2)

    assertEquals(getHighestCommonDenominator(23, 18), 1)

    assertEquals(getHighestCommonDenominator(23, 18), 1)

})
