# Step 3: Making Arguments

Well done, dear chap!
Well done indeed.

I have but one more file for you.
It contains the many motions I have seen in cases involving my clients.
I must admit, I'd grown quite weary while jotting down those motions.
It is missing TypeScript types, and many elements in the `motions` array have typos in their data.

The tricky thing is, there are a few different types of motions that can be filed.
There should be some kind of discriminating indicator property on the types to distinguish between:

- Status: _allowed_, _denied_, and _pending_. Within those types:
  - Allowed: it may also indicate how many hours it spent in deliberation
  - Denied: it may also indicate how many hours it spent in deliberation, and whether it annoyed the justice
  - Pending: it may also indicate how many hours it's estimated to spent in deliberation
- Step: _post-trial_ and _pre-trial_. Within those types:
  - Pre-trial: I only noted _dismissals_, _suppressions_, and _venue changes_
  - Post-trial: I only noted _acquittals_, _corrections_, and _new trials_

## Files

- `index.ts`: Add your object types and type annotations here
- `index.test.ts`: Tests verifying your object types and type annotations
- `solution.ts`: Solution code
