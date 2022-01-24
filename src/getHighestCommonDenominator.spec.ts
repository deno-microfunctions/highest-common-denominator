import { assertEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts"

import { getHighestCommonDenominator } from "./getHighestCommonDenominator.ts"


Deno.test("should generate a cool public and private key", async () => {

    const gcd = getHighestCommonDenominator(21, 14)
    assertEquals(gcd, 7)

})
