// These are basically rewrites of the Python Tinyman SDK library, so that we can fetch token prices from there

import algosdk from "algosdk";
import { max, min } from "ramda";
import TINYMAN_ASC from "./tinyman_asc.json";
