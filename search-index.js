var searchIndex = JSON.parse('{\
"tar":{"doc":"A library for reading and writing TAR archives","i":[[3,"Archive","tar","A top-level representation of an archive file.",null,null],[3,"Entries","","An iterator over the entries of an archive.",null,null],[3,"Builder","","A structure for building archives",null,null],[3,"Entry","","A read-only view into an entry of an archive.",null,null],[4,"Unpacked","","When unpacking items the unpacked thing is returned to …",null,null],[13,"File","","A file was unpacked.",0,null],[4,"EntryType","","Indicate for the type of file described by a header.",null,null],[13,"Regular","","Regular file",1,null],[13,"Link","","Hard link",1,null],[13,"Symlink","","Symbolic link",1,null],[13,"Char","","Character device",1,null],[13,"Block","","Block device",1,null],[13,"Directory","","Directory",1,null],[13,"Fifo","","Named pipe (fifo)",1,null],[13,"Continuous","","Implementation-defined \'high-performance\' type, treated …",1,null],[13,"GNULongName","","GNU extension - long file name",1,null],[13,"GNULongLink","","GNU extension - long link name (link target)",1,null],[13,"GNUSparse","","GNU extension - sparse file",1,null],[13,"XGlobalHeader","","Global extended header",1,null],[13,"XHeader","","Extended Header",1,null],[3,"GnuExtSparseHeader","","Representation of the entry found to represent extended …",null,null],[12,"sparse","","",2,null],[12,"isextended","","",2,null],[12,"padding","","",2,null],[3,"GnuHeader","","Representation of the header of an entry in an archive",null,null],[12,"name","","",3,null],[12,"mode","","",3,null],[12,"uid","","",3,null],[12,"gid","","",3,null],[12,"size","","",3,null],[12,"mtime","","",3,null],[12,"cksum","","",3,null],[12,"typeflag","","",3,null],[12,"linkname","","",3,null],[12,"magic","","",3,null],[12,"version","","",3,null],[12,"uname","","",3,null],[12,"gname","","",3,null],[12,"dev_major","","",3,null],[12,"dev_minor","","",3,null],[12,"atime","","",3,null],[12,"ctime","","",3,null],[12,"offset","","",3,null],[12,"longnames","","",3,null],[12,"unused","","",3,null],[12,"sparse","","",3,null],[12,"isextended","","",3,null],[12,"realsize","","",3,null],[12,"pad","","",3,null],[3,"GnuSparseHeader","","Description of the header of a spare entry.",null,null],[12,"offset","","",4,null],[12,"numbytes","","",4,null],[3,"Header","","Representation of the header of an entry in an archive",null,null],[4,"HeaderMode","","Declares the information that should be included when …",null,null],[13,"Complete","","All supported metadata, including mod/access times and …",5,null],[13,"Deterministic","","Only metadata that is directly relevant to the identity …",5,null],[3,"OldHeader","","Representation of the header of an entry in an archive",null,null],[12,"name","","",6,null],[12,"mode","","",6,null],[12,"uid","","",6,null],[12,"gid","","",6,null],[12,"size","","",6,null],[12,"mtime","","",6,null],[12,"cksum","","",6,null],[12,"linkflag","","",6,null],[12,"linkname","","",6,null],[12,"pad","","",6,null],[3,"UstarHeader","","Representation of the header of an entry in an archive",null,null],[12,"name","","",7,null],[12,"mode","","",7,null],[12,"uid","","",7,null],[12,"gid","","",7,null],[12,"size","","",7,null],[12,"mtime","","",7,null],[12,"cksum","","",7,null],[12,"typeflag","","",7,null],[12,"linkname","","",7,null],[12,"magic","","",7,null],[12,"version","","",7,null],[12,"uname","","",7,null],[12,"gname","","",7,null],[12,"dev_major","","",7,null],[12,"dev_minor","","",7,null],[12,"prefix","","",7,null],[12,"pad","","",7,null],[3,"PaxExtension","","A key/value pair corresponding to a pax extension.",null,null],[3,"PaxExtensions","","An iterator over the pax extensions in an archive entry.",null,null],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"into_iter","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"to_owned","","",12,[[]]],[11,"clone_into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"into_iter","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"from","","",14,[[]]],[11,"into","","",14,[[]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"drop","","",10,[[]]],[11,"next","","",9,[[],[["option",4],["result",6]]]],[11,"next","","",13,[[],[["result",6],["option",4]]]],[11,"clone","","",1,[[],["entrytype",4]]],[11,"clone","","",5,[[],["headermode",4]]],[11,"clone","","",12,[[],["header",3]]],[11,"default","","",2,[[]]],[11,"eq","","",1,[[["entrytype",4]],["bool",15]]],[11,"ne","","",1,[[["entrytype",4]],["bool",15]]],[11,"eq","","",5,[[["headermode",4]],["bool",15]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"read","","",11,[[],[["result",6],["usize",15]]]],[11,"new","","Create a new archive with the underlying object as the …",8,[[],["archive",3]]],[11,"into_inner","","Unwrap this archive, returning the underlying object.",8,[[]]],[11,"entries","","Construct an iterator over the entries in this archive.",8,[[],[["result",6],["entries",3]]]],[11,"unpack","","Unpacks the contents tarball into the specified <code>dst</code>.",8,[[["path",3],["asref",8]],["result",6]]],[11,"set_unpack_xattrs","","Indicate whether extended file attributes (xattrs on …",8,[[["bool",15]]]],[11,"set_preserve_permissions","","Indicate whether extended permissions (like suid on Unix) …",8,[[["bool",15]]]],[11,"set_overwrite","","Indicate whether files and symlinks should be overwritten …",8,[[["bool",15]]]],[11,"set_preserve_mtime","","Indicate whether access time information is preserved …",8,[[["bool",15]]]],[11,"set_ignore_zeros","","Ignore zeroed headers, which would otherwise indicate to …",8,[[["bool",15]]]],[11,"raw","","Indicates whether this iterator will return raw entries …",9,[[["bool",15]],["entries",3]]],[11,"new","","Create a new archive builder with the underlying object …",10,[[],["builder",3]]],[11,"mode","","Changes the HeaderMode that will be used when reading fs …",10,[[["headermode",4]]]],[11,"follow_symlinks","","Follow symlinks, archiving the contents of the file they …",10,[[["bool",15]]]],[11,"get_ref","","Gets shared reference to the underlying object.",10,[[]]],[11,"get_mut","","Gets mutable reference to the underlying object.",10,[[]]],[11,"into_inner","","Unwrap this archive, returning the underlying object.",10,[[],["result",6]]],[11,"append","","Adds a new entry to this archive.",10,[[["header",3],["read",8]],["result",6]]],[11,"append_data","","Adds a new entry to this archive with the specified path.",10,[[["read",8],["header",3],["path",3],["asref",8]],["result",6]]],[11,"append_path","","Adds a file on the local filesystem to this archive.",10,[[["path",3],["asref",8]],["result",6]]],[11,"append_path_with_name","","Adds a file on the local filesystem to this archive under …",10,[[["path",3],["asref",8]],["result",6]]],[11,"append_file","","Adds a file to this archive with the given path as the …",10,[[["path",3],["asref",8],["file",3]],["result",6]]],[11,"append_dir","","Adds a directory to this archive with the given path as …",10,[[],["result",6]]],[11,"append_dir_all","","Adds a directory and all of its contents (recursively) to …",10,[[],["result",6]]],[11,"finish","","Finish writing this archive, emitting the termination …",10,[[],["result",6]]],[11,"path","","Returns the path name for this entry.",11,[[],[["cow",4],["result",6]]]],[11,"path_bytes","","Returns the raw bytes listed for this entry.",11,[[],["cow",4]]],[11,"link_name","","Returns the link name for this entry, if any is found.",11,[[],[["result",6],["option",4]]]],[11,"link_name_bytes","","Returns the link name for this entry, in bytes, if listed.",11,[[],[["cow",4],["option",4]]]],[11,"pax_extensions","","Returns an iterator over the pax extensions contained in …",11,[[],[["option",4],["result",6]]]],[11,"header","","Returns access to the header of this entry in the archive.",11,[[],["header",3]]],[11,"size","","Returns access to the size of this entry in the archive.",11,[[],["u64",15]]],[11,"raw_header_position","","Returns the starting position, in bytes, of the header of …",11,[[],["u64",15]]],[11,"raw_file_position","","Returns the starting position, in bytes, of the file of …",11,[[],["u64",15]]],[11,"unpack","","Writes this file to the specified location.",11,[[["path",3],["asref",8]],[["result",6],["unpacked",4]]]],[11,"unpack_in","","Extracts this file under the specified path, avoiding …",11,[[["path",3],["asref",8]],[["bool",15],["result",6]]]],[11,"set_unpack_xattrs","","Indicate whether extended file attributes (xattrs on …",11,[[["bool",15]]]],[11,"set_preserve_permissions","","Indicate whether extended permissions (like suid on Unix) …",11,[[["bool",15]]]],[11,"set_preserve_mtime","","Indicate whether access time information is preserved …",11,[[["bool",15]]]],[11,"new","","Creates a new entry type from a raw byte.",1,[[["u8",15]],["entrytype",4]]],[11,"as_byte","","Returns the raw underlying byte that this entry type …",1,[[],["u8",15]]],[11,"file","","Creates a new entry type representing a regular file.",1,[[],["entrytype",4]]],[11,"hard_link","","Creates a new entry type representing a hard link.",1,[[],["entrytype",4]]],[11,"symlink","","Creates a new entry type representing a symlink.",1,[[],["entrytype",4]]],[11,"character_special","","Creates a new entry type representing a character special …",1,[[],["entrytype",4]]],[11,"block_special","","Creates a new entry type representing a block special …",1,[[],["entrytype",4]]],[11,"dir","","Creates a new entry type representing a directory.",1,[[],["entrytype",4]]],[11,"fifo","","Creates a new entry type representing a FIFO.",1,[[],["entrytype",4]]],[11,"contiguous","","Creates a new entry type representing a contiguous file.",1,[[],["entrytype",4]]],[11,"is_file","","Returns whether this type represents a regular file.",1,[[],["bool",15]]],[11,"is_hard_link","","Returns whether this type represents a hard link.",1,[[],["bool",15]]],[11,"is_symlink","","Returns whether this type represents a symlink.",1,[[],["bool",15]]],[11,"is_character_special","","Returns whether this type represents a character special …",1,[[],["bool",15]]],[11,"is_block_special","","Returns whether this type represents a block special …",1,[[],["bool",15]]],[11,"is_dir","","Returns whether this type represents a directory.",1,[[],["bool",15]]],[11,"is_fifo","","Returns whether this type represents a FIFO.",1,[[],["bool",15]]],[11,"is_contiguous","","Returns whether this type represents a contiguous file.",1,[[],["bool",15]]],[11,"is_gnu_longname","","Returns whether this type represents a GNU long name …",1,[[],["bool",15]]],[11,"is_gnu_sparse","","Returns whether this type represents a GNU sparse header.",1,[[],["bool",15]]],[11,"is_gnu_longlink","","Returns whether this type represents a GNU long link …",1,[[],["bool",15]]],[11,"is_pax_global_extensions","","Returns whether this type represents a GNU long name …",1,[[],["bool",15]]],[11,"is_pax_local_extensions","","Returns whether this type represents a GNU long link …",1,[[],["bool",15]]],[11,"new_gnu","","Creates a new blank GNU header.",12,[[],["header",3]]],[11,"new_ustar","","Creates a new blank UStar header.",12,[[],["header",3]]],[11,"new_old","","Creates a new blank old header.",12,[[],["header",3]]],[11,"as_old","","View this archive header as a raw \\\"old\\\" archive header.",12,[[],["oldheader",3]]],[11,"as_old_mut","","Same as <code>as_old</code>, but the mutable version.",12,[[],["oldheader",3]]],[11,"as_ustar","","View this archive header as a raw UStar archive header.",12,[[],[["option",4],["ustarheader",3]]]],[11,"as_ustar_mut","","Same as <code>as_ustar_mut</code>, but the mutable version.",12,[[],[["ustarheader",3],["option",4]]]],[11,"as_gnu","","View this archive header as a raw GNU archive header.",12,[[],[["gnuheader",3],["option",4]]]],[11,"as_gnu_mut","","Same as <code>as_gnu</code>, but the mutable version.",12,[[],[["option",4],["gnuheader",3]]]],[11,"from_byte_slice","","Treats the given byte slice as a header.",12,[[],["header",3]]],[11,"as_bytes","","Returns a view into this header as a byte array.",12,[[]]],[11,"as_mut_bytes","","Returns a view into this header as a byte array.",12,[[]]],[11,"set_metadata","","Blanket sets the metadata in this header from the …",12,[[["metadata",3]]]],[11,"set_metadata_in_mode","","Sets only the metadata relevant to the given HeaderMode …",12,[[["metadata",3],["headermode",4]]]],[11,"entry_size","","Returns the size of entry\'s data this header represents.",12,[[],[["result",6],["u64",15]]]],[11,"size","","Returns the file size this header represents.",12,[[],[["result",6],["u64",15]]]],[11,"set_size","","Encodes the <code>size</code> argument into the size field of this …",12,[[["u64",15]]]],[11,"path","","Returns the raw path name stored in this header.",12,[[],[["cow",4],["result",6]]]],[11,"path_bytes","","Returns the pathname stored in this header as a byte …",12,[[],["cow",4]]],[11,"set_path","","Sets the path name for this header.",12,[[["path",3],["asref",8]],["result",6]]],[11,"link_name","","Returns the link name stored in this header, if any is …",12,[[],[["result",6],["option",4]]]],[11,"link_name_bytes","","Returns the link name stored in this header as a byte …",12,[[],[["cow",4],["option",4]]]],[11,"set_link_name","","Sets the link name for this header.",12,[[["path",3],["asref",8]],["result",6]]],[11,"mode","","Returns the mode bits for this file",12,[[],[["u32",15],["result",6]]]],[11,"set_mode","","Encodes the <code>mode</code> provided into this header.",12,[[["u32",15]]]],[11,"uid","","Returns the value of the owner\'s user ID field",12,[[],[["result",6],["u64",15]]]],[11,"set_uid","","Encodes the <code>uid</code> provided into this header.",12,[[["u64",15]]]],[11,"gid","","Returns the value of the group\'s user ID field",12,[[],[["result",6],["u64",15]]]],[11,"set_gid","","Encodes the <code>gid</code> provided into this header.",12,[[["u64",15]]]],[11,"mtime","","Returns the last modification time in Unix time format",12,[[],[["result",6],["u64",15]]]],[11,"set_mtime","","Encodes the <code>mtime</code> provided into this header.",12,[[["u64",15]]]],[11,"username","","Return the user name of the owner of this file.",12,[[],[["result",4],["option",4],["utf8error",3]]]],[11,"username_bytes","","Returns the user name of the owner of this file, if …",12,[[],["option",4]]],[11,"set_username","","Sets the username inside this header.",12,[[["str",15]],["result",6]]],[11,"groupname","","Return the group name of the owner of this file.",12,[[],[["result",4],["option",4],["utf8error",3]]]],[11,"groupname_bytes","","Returns the group name of the owner of this file, if …",12,[[],["option",4]]],[11,"set_groupname","","Sets the group name inside this header.",12,[[["str",15]],["result",6]]],[11,"device_major","","Returns the device major number, if present.",12,[[],[["result",6],["option",4]]]],[11,"set_device_major","","Encodes the value <code>major</code> into the dev_major field of this …",12,[[["u32",15]],["result",6]]],[11,"device_minor","","Returns the device minor number, if present.",12,[[],[["result",6],["option",4]]]],[11,"set_device_minor","","Encodes the value <code>minor</code> into the dev_minor field of this …",12,[[["u32",15]],["result",6]]],[11,"entry_type","","Returns the type of file described by this header.",12,[[],["entrytype",4]]],[11,"set_entry_type","","Sets the type of file that will be described by this …",12,[[["entrytype",4]]]],[11,"cksum","","Returns the checksum field of this header.",12,[[],[["u32",15],["result",6]]]],[11,"set_cksum","","Sets the checksum field of this header based on the …",12,[[]]],[11,"as_header","","Views this as a normal <code>Header</code>",6,[[],["header",3]]],[11,"as_header_mut","","Views this as a normal <code>Header</code>",6,[[],["header",3]]],[11,"path_bytes","","See <code>Header::path_bytes</code>",7,[[],["cow",4]]],[11,"set_path","","See <code>Header::set_path</code>",7,[[["path",3],["asref",8]],["result",6]]],[11,"username_bytes","","See <code>Header::username_bytes</code>",7,[[]]],[11,"set_username","","See <code>Header::set_username</code>",7,[[["str",15]],["result",6]]],[11,"groupname_bytes","","See <code>Header::groupname_bytes</code>",7,[[]]],[11,"set_groupname","","See <code>Header::set_groupname</code>",7,[[["str",15]],["result",6]]],[11,"device_major","","See <code>Header::device_major</code>",7,[[],[["u32",15],["result",6]]]],[11,"set_device_major","","See <code>Header::set_device_major</code>",7,[[["u32",15]]]],[11,"device_minor","","See <code>Header::device_minor</code>",7,[[],[["u32",15],["result",6]]]],[11,"set_device_minor","","See <code>Header::set_device_minor</code>",7,[[["u32",15]]]],[11,"as_header","","Views this as a normal <code>Header</code>",7,[[],["header",3]]],[11,"as_header_mut","","Views this as a normal <code>Header</code>",7,[[],["header",3]]],[11,"username_bytes","","See <code>Header::username_bytes</code>",3,[[]]],[11,"set_username","","See <code>Header::set_username</code>",3,[[["str",15]],["result",6]]],[11,"groupname_bytes","","See <code>Header::groupname_bytes</code>",3,[[]]],[11,"set_groupname","","See <code>Header::set_groupname</code>",3,[[["str",15]],["result",6]]],[11,"device_major","","See <code>Header::device_major</code>",3,[[],[["u32",15],["result",6]]]],[11,"set_device_major","","See <code>Header::set_device_major</code>",3,[[["u32",15]]]],[11,"device_minor","","See <code>Header::device_minor</code>",3,[[],[["u32",15],["result",6]]]],[11,"set_device_minor","","See <code>Header::set_device_minor</code>",3,[[["u32",15]]]],[11,"atime","","Returns the last modification time in Unix time format",3,[[],[["result",6],["u64",15]]]],[11,"set_atime","","Encodes the <code>atime</code> provided into this header.",3,[[["u64",15]]]],[11,"ctime","","Returns the last modification time in Unix time format",3,[[],[["result",6],["u64",15]]]],[11,"set_ctime","","Encodes the <code>ctime</code> provided into this header.",3,[[["u64",15]]]],[11,"real_size","","Returns the \\\"real size\\\" of the file this header …",3,[[],[["result",6],["u64",15]]]],[11,"is_extended","","Indicates whether this header will be followed by …",3,[[],["bool",15]]],[11,"as_header","","Views this as a normal <code>Header</code>",3,[[],["header",3]]],[11,"as_header_mut","","Views this as a normal <code>Header</code>",3,[[],["header",3]]],[11,"is_empty","","Returns true if block is empty",4,[[],["bool",15]]],[11,"offset","","Offset of the block from the start of the file",4,[[],[["result",6],["u64",15]]]],[11,"length","","Length of the block",4,[[],[["result",6],["u64",15]]]],[11,"new","","Crates a new zero\'d out sparse header entry.",2,[[],["gnuextsparseheader",3]]],[11,"as_bytes","","Returns a view into this header as a byte array.",2,[[]]],[11,"as_mut_bytes","","Returns a view into this header as a byte array.",2,[[]]],[11,"sparse","","Returns a slice of the underlying sparse headers.",2,[[]]],[11,"is_extended","","Indicates if another sparse header should be following …",2,[[],["bool",15]]],[11,"key","","Returns the key for this key/value pair parsed as a …",14,[[],[["result",4],["str",15],["utf8error",3]]]],[11,"key_bytes","","Returns the underlying raw bytes for the key of this …",14,[[]]],[11,"value","","Returns the value for this key/value pair parsed as a …",14,[[],[["result",4],["str",15],["utf8error",3]]]],[11,"value_bytes","","Returns the underlying raw bytes for this value of this …",14,[[]]]],"p":[[4,"Unpacked"],[4,"EntryType"],[3,"GnuExtSparseHeader"],[3,"GnuHeader"],[3,"GnuSparseHeader"],[4,"HeaderMode"],[3,"OldHeader"],[3,"UstarHeader"],[3,"Archive"],[3,"Entries"],[3,"Builder"],[3,"Entry"],[3,"Header"],[3,"PaxExtensions"],[3,"PaxExtension"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);