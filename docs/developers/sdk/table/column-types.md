# Column Types

Available types for resource columns are defined in [column.go](https://github.com/cloudquery/cq-provider-sdk/blob/main/provider/schema/column.go).

| Type | Go Type(s) |
| ---- | ---- |
| TypeBigInt | int, uint32, int64 |
| TypeBool | bool |
| TypeFloat | float32, float64 |
| TypeInt | uint16, int32 |
| TypeSmallInt | int8, uint8, int16 |
| TypeString | string |
|  |  |
| TypeCIDR | net.IPNet |
| TypeInet | net.IP, net.IPAddr |
| TypeJSON | struct, slice, map |
| TypeMacAddr | net.HardwareAddr |
| TypeTimestamp | time.Time |
| TypeUUID | uuid.UUID |
|  |  |
| TypeByteArray | []byte |
| TypeCIDRArray | []net.IPNet |
| TypeInetArray | []net.IP, []net.IPAddr |
| TypeIntArray | []uint16, []int32 |
| TypeMacAddrArray | []net.HardwareAddr |
| TypeStringArray | []string |
| TypeUUIDArray | []uuid.UUID |
