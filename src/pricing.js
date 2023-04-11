export const pricing = {
  personal: {
    displayName: "Personal",
    key: "personal",
    pricing: {
      base: {
        inr: 0.6849,
        usd: 0.0083,
      },
      rps: {
        enabled: false,
        limits: [
          {
            value: 10,
            price: {
              inr: 0,
              usd: 0,
            },
          },
          {
            value: 100,
            price: {
              inr: 0,
              usd: 0,
            },
          },
        ],
      },
      projects: {
        enabled: false,
        limits: [
          {
            value: 1,
            price: {
              inr: 0,
              usd: 0,
            },
          },
          {
            value: 10,
            price: {
              inr: 0,
              usd: 0,
            },
          },
        ],
      },
      data: {
        enabled: true,
        limits: [
          {
            value: 1,
            price: {
              inr: 9,
              usd: 0.11,
            },
          },
          {
            value: 100,
            price: {
              inr: 9,
              usd: 0.11,
            },
          },
        ],
      },
    },
  },
  starter: {
    displayName: "Starter",
    key: "starter",
    pricing: {
      base: {
        inr: 11,
        usd: 0.0083,
      },
      rps: {
        enabled: true,
        limits: [
          {
            value: 300,
            price: {
              inr: 0,
              usd: 0,
            },
          },
          {
            value: 900,
            price: {
              inr: 14,
              usd: 0.169,
            },
          },
        ],
      },
      projects: {
        enabled: false,
        limits: [
          {
            value: 1,
            price: {
              inr: 0,
              usd: 0,
            },
          },
          {
            value: 10,
            price: {
              inr: 0,
              usd: 0,
            },
          },
        ],
      },
      data: {
        enabled: true,
        limits: [
          {
            value: 10,
            price: {
              inr: 9,
              usd: 0.11,
            },
          },
          {
            value: 500,
            price: {
              inr: 9,
              usd: 0.11,
            },
          },
        ],
      },
    },
  },
  standard: {
    displayName: "Standard",
    key: "startdard",
    pricing: {
      base: {
        inr: 35,
        usd: 0.0083,
      },
      rps: {
        enabled: true,
        limits: [
          {
            value: 600,
            price: {
              inr: 0,
              usd: 0,
            },
          },
          {
            value: 1200,
            price: {
              inr: 24,
              usd: 0.169,
            },
          },
          {
            value: 1800,
            price: {
              inr: 64,
              usd: 0.169,
            },
          },
        ],
      },
      projects: {
        enabled: true,
        limits: [
          {
            value: 1,
            multiplier: {
              inr: 0.8,
              usd: 0.8,
            },
          },
          {
            value: 10,
            multiplier: {
              inr: 0.8,
              usd: 0.8,
            },
          },
        ],
      },
      data: {
        enabled: true,
        limits: [
          {
            value: 50,
            price: {
              inr: 9,
              usd: 0.11,
            },
          },
          {
            value: 1000,
            price: {
              inr: 9,
              usd: 0.11,
            },
          },
        ],
      },
    },
  },
};

export const dataPrice = {
  data: {
    inr: 9,
    usd: 0.11,
  },
};

// plan = "starter"
// per_project_total_cost = (obj["base"] + obj["rps"])
// total_project_cost = per_project_total_cost * (1 + (N - 1) * multipler)
// data_cost = (selected - included) * data_price
// total_cost = total_project_cost + data_cost
