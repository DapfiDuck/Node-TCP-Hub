# TCP Hub (Node)

This simple Node script implements the net-module to allow a cluster of clients to easily share tcp packages in a network.
There are no checks performed on this Server and it just blindly manages the connected users, reads the packages comming in and sends them off to everyone else on the cluster.

To allow a secure distribution further development is required. This net implementation simply aims at giving a base to a server side implementation of client clusters.
