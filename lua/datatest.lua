-- Memory address to read from
local address = 0x086279a9

-- Read 8-bit data from the memory address
local data8 = emu:read8(address)
console:log("Data (8-bit): " .. data8)

-- Read 16-bit data from the memory address
local data16 = emu:read16(address)
console:log("Data (16-bit): " .. data16)

-- Read 32-bit data from the memory address
local data32 = emu:read32(address)
console:log("Data (32-bit): " .. data32)
